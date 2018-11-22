var csvToJson = require('convert-csv-to-json');

var data= csvToJson.fieldDelimiter(',') .getJsonFromCsv('matches.csv');

var TotalMatches=[];
console.log(data[0].season); 
let obj={};
let count=1;
for(let i=0;i<data.length-1;i++){
        if((data[i].season) === (data[i+1].season)){
              count++;
        }
        else{
            obj[data[i].season]=count;
            TotalMatches.push(obj);
            count=1;
            obj = {};
        }
}
function compare(a,b) {
        return (Object.keys(a) - Object.keys(b));
                     }
console.log(TotalMatches.sort(compare));