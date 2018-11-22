let csvToJson = require('convert-csv-to-json');

let data= csvToJson.fieldDelimiter(',') .getJsonFromCsv('matches.csv');
console.log(data[0]);