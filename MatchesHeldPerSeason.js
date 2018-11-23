var fs = require('fs');
var csv = require('fast-csv');
var matchesStream = fs.createReadStream("matches.csv");
var MatchesPerSeason={};

csv
.fromStream(matchesStream,{headers : true})
.on("data",function(match){
    if(MatchesPerSeason.hasOwnProperty(match['season'])){
        MatchesPerSeason[match['season']]++;
    }
    else{
        MatchesPerSeason[match['season']]=1;
    }
})
.on("end",function(){
    console.log(MatchesPerSeason);
})