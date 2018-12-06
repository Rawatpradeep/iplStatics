var csvToJson = require('convert-csv-to-json');
var matchData = csvToJson.fieldDelimiter(',').getJsonFromCsv('matches.csv');
var fs = require('fs');
var csv = require('fast-csv');
var deliveriesStream = fs.createReadStream("deliveries.csv");

var matchId = [];
var teamRunsInPp = {};


for (let matches = 0; matches < matchData.length - 1; matches++) {
    if (matchData[matches].season !== matchData[matches + 1].season) {
        matchId.push(matches + 1);
    }
}
//console.log(matchId);

csv
    .fromStream(deliveriesStream, {
        headers: true
    })
    .on("data", function (delivery) {
        var id = parseInt(delivery['match_id']);
        // console.log(matchId.includes(id))
        if (matchId.includes(id)) {
            if (parseInt(delivery['over']) <= 6) {
                if (teamRunsInPp.hasOwnProperty(delivery['batting_team'])) {
                    teamRunsInPp[delivery['batting_team']] += parseInt(delivery["total_runs"])
                } else {
                    teamRunsInPp[delivery['batting_team']] = parseInt(delivery["total_runs"])
                }
            }
        }

    })
    .on("end", function () {
        console.log(sorting(teamRunsInPp));
    })



    function sorting(obj){
        var arr=[]
          for(let i in obj){
              let ar=[];
              ar[0]=i;
              ar[1]=obj[i]
            arr.push(ar); 
        }   
          arr.sort((a,b)=>{
              return b[1]-a[1];
          })
          return arr;
      }