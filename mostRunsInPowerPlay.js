var csvToJson = require('convert-csv-to-json');
var matchData = csvToJson.fieldDelimiter(',').getJsonFromCsv('matches.csv');
var deliveryData = csvToJson.fieldDelimiter(',').getJsonFromCsv('./deliveries.csv');


var getStatics = require('./getStatics');
 var matchId = getStatics.getFinalMatchId(matchData);
 
 
 console.log(getStatics.getRunsScoredInPp(deliveryData , matchId));