var csvToJson = require('convert-csv-to-json');
var deliveryData = csvToJson.fieldDelimiter(',').getJsonFromCsv('./deliveries.csv');


var getStatics = require('./getStatics');

console.log(getStatics.getDeathBowler(deliveryData));