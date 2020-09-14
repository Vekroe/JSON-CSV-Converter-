/* 
***************************
Import needed Libraries
***************************
*/
const converter = require('json-2-csv'); //for json to csv
const fs = require('fs'); //for file writing 

/*
***************************
Json -> CSV
***************************
*/

//Import file to variable
//If I have time I will auto detect names of a file
var todos = require('./todos.js'); //this is a nested JSON array so the array we actually need is stored in todos[questions]

// convert JSON array to CSV string
converter.json2csv(todos['questions'], (err, csv) => { //converts todos[questions] to csv format
    if (err) { //error handling 
        throw err; //error to console
    }

    // write CSV to a file
    fs.writeFileSync('todos.csv', csv); //If I have time I will get this to auto name
});

/*
***************************
CSV -> JSON
***************************
*/
