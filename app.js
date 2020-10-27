/* 
***************************
Import needed Libraries
***************************
*/
const Excel = require('xlsx');
const fs = require('fs'); //for file writing 
const { questions } = require('./Input/users');

/*
***************************
Load files
***************************
*/

//creates an array containing names of all the files in the inputs folder
var files = fs.readdirSync('./Input/');

for (x of files) { //cycle through all files
   
    //sorts csv from js
    if (x.slice(-3) == '.js') { //checks if file is json
        jsonInput(x); //turns json to csv
    }
    
    else if (x.slice(-5) == '.xlsx') { //checks if file is xlsx
        csvInput(x); //turns csv to json
    }
    
    else { //if unknown file type 
        console.log(`${x} is not a valid file type`);
    }
}

/*
***************************
Json -> CSV
***************************
*/

function jsonInput(input) {

    //Import file to variable
    var convertFrom = './Input/' + input; //sets the location of the file
    var convertTo =  './Output/' + input.slice(0,-3) + '.xlsx'; //sets the location to save to

    //gets the file contents
    var file = require(convertFrom); //this is a nested JSON array so the array we actually need is stored in file[questions]

    var wb = Excel.utils.book_new(); //creates a new workbook
    //sets workbook properties
    wb.Props = {
        Title: file['title'],
        Author: file['author']
    }

    //manages and adds the data sheet
    var ws_name = "data"; //sets the sheet name to data
    var ws = Excel.utils.json_to_sheet(file['questions']); //adds the questions data to a new sheet variable

    Excel.utils.book_append_sheet(wb, ws, ws_name); //appends the sheet with the name and data to the selected workbook

    //manages and adds the file data sheet 
    ws_name = "File Info"; //sets new sheet name
    var fileInfo = JSON.parse(JSON.stringify(file)); //copys the data to a new 
    delete fileInfo['questions']; //removes question array so that you only have the info section
    var ws = Excel.utils.json_to_sheet(JSON.parse("[" + JSON.stringify(fileInfo) + "]");); //adds square brackets so that XLSX detects it as a JSON array

    Excel.utils.book_append_sheet(wb, ws, ws_name); //appends the sheet with the name and data to the selected workbook
    Excel.writeFile(wb, convertTo); //writes the workbook to the file
}

/*
***************************
Json -> CSV
***************************
*/
function csvInput(input) {

    //Import file to variable
    var convertFrom = './Input/' + input; //sets the location of the file
    var convertTo =  './Output/' + input.slice(0,-4) + '.js'; //sets the location to save to
    
    var workbook = Excel.readFile(convertFrom); //reads workbook file
    var jsonArrayInfo = Excel.utils.sheet_to_json(workbook.Sheets['File Info']); //gets file info sheet or module = [] array
    var jsonArrayData = Excel.utils.sheet_to_json(workbook.Sheets['data']); //gets data sheet or questions[] array
    var CompleteArray = JSON.parse((JSON.stringify(jsonArrayInfo).slice(1,-2)) + ',"questions":' +JSON.stringify(jsonArrayData) + '}'); //splices together are reformats arrays

    fs.writeFile(convertTo, 'module.exports = ' + JSON.stringify(CompleteArray, null, 4), function(err, result) { //last bit of formating while it writes js file
        if(err) console.log('error', err); //error handling
      });
}