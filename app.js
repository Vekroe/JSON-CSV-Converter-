/* 
***************************
Import needed Libraries
***************************
*/
const JSONtoCSV = require('json-2-csv'); //for json to csv
const CSVToJSON  = require('csvtojson'); //for csv to json
const fs = require('fs'); //for file writing 

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
    else if (x.slice(-3) == 'csv') { //checks if file is csv
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
    var convertTo =  './Output/' + input.slice(0,-3) + '.csv'; //sets the location to save to

    //gets the file contents
    var file = require(convertFrom); //this is a nested JSON array so the array we actually need is stored in file[questions]

    // convert JSON array to CSV
    JSONtoCSV.json2csv(file['questions'], (err, csv) => { //converts file[questions] to csv format
        
        if (err) { //error handling 
            throw err; //error to console
        }

        // write CSV to a file
        fs.writeFileSync(convertTo, csv);

    });

}

/*
***************************
CSV -> JSON
***************************
*/

function csvInput(input) {

    //Import file to variable
    var convertFrom = './Input/' + input; //sets the location of the file
    var convertTo =  './Output/' + input.slice(0,-4) + '.js'; //sets the location to save to
    
    //convert CSV to JSON array
    CSVToJSON().fromFile(convertFrom) 
    .then(file => { //file is the new JSON Array
        
        //write JSON to a js file
        fs.writeFile(convertTo, JSON.stringify(file, null, 4), (err) => {
            
            if (err) { //error handling
                throw err; //error handling
            }
        });

    }).catch(err => { //error handling
        console.log(err); //error handling
    });
}
