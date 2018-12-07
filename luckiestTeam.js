var fs = require('fs');
var csv = require('fast-csv');
var luckiestTeam = {}
var matchesStream = fs.createReadStream("matches.csv");
csv
.fromStream(matchesStream,{headers : true})
.on("data",function(match){
    getLuckestTeam(match)
})
.on("end",function(){
          console.log(sorting(luckiestTeam));
})


function getLuckestTeam(obj){
        if (luckiestTeam.hasOwnProperty(obj['toss_winner'])) {
            luckiestTeam[obj['toss_winner']]++;
        } else {
            luckiestTeam[obj['toss_winner']] = 1;
        }
    
}

function sorting(obj) {
    var output = []
    for (let i in obj) {
        let temp = [];
        temp[0] = i;
        temp[1] = obj[i]
        output.push(temp);
    }
    output.sort((a, b) => {
        return b[1] - a[1];
    })
    return output;
}

// Chekcing the logic

function getTossWon(obj) {
    var luckiestTeam = {};
    for(let i in obj){
    if (obj[i]['season'] == 2017) {
        if (luckiestTeam.hasOwnProperty(obj[i]['toss_winner'])) {
            luckiestTeam[obj[i]['toss_winner']]++;
        } else {
            luckiestTeam[obj[i]['toss_winner']] = 1;
        }
    }}
    luckiestTeam = sorting(luckiestTeam);
    return luckiestTeam[0];
}
module.exports = {
    getTossWon: getTossWon
}