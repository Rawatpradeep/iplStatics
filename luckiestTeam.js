var csvToJson = require('convert-csv-to-json');
var matchData = csvToJson.fieldDelimiter(',').getJsonFromCsv('matches.csv');
var getStatics = require('./getStatics');

console.log(getStatics.getLuckiestTeam(matchData));