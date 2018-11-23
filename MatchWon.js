var csvToJson = require('convert-csv-to-json');

var SeasonData= csvToJson.fieldDelimiter(',') .getJsonFromCsv('matches.csv');

let MatchesWonPerSeason={};
let season={};
count=1;
for(let match=0;match<SeasonData.length-1;match++){
      if((SeasonData[match].season) === (SeasonData[match+1].season)){
            if(season.hasOwnProperty(SeasonData[match].winner)){
                  season[(SeasonData[match].winner)]++;    
            }
            else{
                season[SeasonData[match].winner]=count;
            }

      }
      else{
        if(season.hasOwnProperty(SeasonData[match].winner)){
            season[(SeasonData[match].winner)]++;    
      }
      else{
          season[SeasonData[match].winner]=count;
      }
             MatchesWonPerSeason[SeasonData[match].season]=season;
             count=1;
             season={};          
      }
}


console.log(MatchesWonPerSeason);