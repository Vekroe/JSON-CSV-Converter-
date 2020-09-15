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

var files = fs.readdirSync('./Input/');

for (x of files) {
    console.log(x.slice(-3))
    if (x.slice(-3) == '.js') {
        jsonInput(x);
    }
    else if (x.slice(-3) == 'csv') {
        csvInput(x);
    }
    else {
        console.log(`${x} is not a valid file type`)
    }
}

/*
***************************
Json -> CSV
***************************
*/

function jsonInput(input) {
    //Import file to variable
    //If I have time I will auto detect names of a file
    var convertFrom = './Input/' + input;
    var convertTo =  './Output/' + input.slice(0,-3) + '.csv';
    var file = require(convertFrom); //this is a nested JSON array so the array we actually need is stored in todos[questions]
    console.log(file['questions']);

    // convert JSON array to CSV string
    JSONtoCSV.json2csv(file['questions'], (err, csv) => { //converts file[questions] to csv format
        if (err) { //error handling 
            throw err; //error to console
        }

        // write CSV to a file
        fs.writeFileSync(convertTo, csv); //If I have time I will get this to auto name
    });

}

/*
***************************
CSV -> JSON
***************************
*/
function csvInput(input) {
    var convertFrom = './Input/' + input;
    var convertTo =  './Output/' + input.slice(0,-4) + '.js';
    
    CSVToJSON().fromFile(convertFrom)
    .then(file => {

        // users is a JSON array
        // log the JSON array
        console.log(file);
        
        fs.writeFile(convertTo, JSON.stringify(file, null, 4), (err) => {
            if (err) {
                throw err;
            }
            console.log(`JSON array ${input.slice(0, -4)} is saved.`);
        });
    }).catch(err => {
        // log error if any
        console.log(err);
    });
}
