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

    var wb = Excel.utils.book_new();
    wb.Props = {
        Title: file['title'],
        Author: file['author']
    }

    var ws_name = "data";

    var ws_data = file['questions'];
    var ws = Excel.utils.json_to_sheet(ws_data);

    Excel.utils.book_append_sheet(wb, ws, ws_name);

    ws_name = "File Info";

    var fileInfo = JSON.parse(JSON.stringify(file));
    delete fileInfo['questions'];

    ws_data = JSON.parse("[" + JSON.stringify(fileInfo) + "]");

    var ws = Excel.utils.json_to_sheet(ws_data);

    Excel.utils.book_append_sheet(wb, ws, ws_name);
    Excel.writeFile(wb, convertTo);


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
    
    var workbook = Excel.readFile(convertFrom);
    var jsonArrayInfo = Excel.utils.sheet_to_json(workbook.Sheets['File Info']);
    var jsonArrayData = Excel.utils.sheet_to_json(workbook.Sheets['data']);
    var arrayatempt = jsonArrayInfo;
    var CompleteArray = JSON.parse((JSON.stringify(arrayatempt).slice(1,-2)) + ',"questions":' +JSON.stringify(jsonArrayData) + '}');

    fs.writeFile(convertTo, 'module.exports = ' + JSON.stringify(CompleteArray, null, 4), function(err, result) {
        if(err) console.log('error', err);
      });
}

