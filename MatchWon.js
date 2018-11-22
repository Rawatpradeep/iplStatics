var csvToJson = require('convert-csv-to-json');

var data= csvToJson.fieldDelimiter(',') .getJsonFromCsv('matches.csv');

let matches={};
let obj={};
count=1;
for(let i=0;i<data.length-1;i++){
      if((data[i].season) === (data[i+1].season)){
            if(obj.hasOwnProperty(data[i].winner)){
                  obj[(data[i].winner)]++;    
            }
            else{
                obj[data[i].winner]=count;
            }

      }
      else{
        if(obj.hasOwnProperty(data[i].winner)){
            obj[(data[i].winner)]++;    
      }
      else{
          obj[data[i].winner]=count;
      }
             matches[data[i].season]=obj
             count=1;
             obj={};          
      }
}


console.log(matches);