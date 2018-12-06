var fs = require('fs');
var csv = require('fast-csv');
var matchesStream = fs.createReadStream("matches.csv");
var luckiestTeam={};

csv
.fromStream(matchesStream,{headers : true})
.on("data",function(match){
    if(luckiestTeam.hasOwnProperty(match['toss_winner'])){
        luckiestTeam[match['toss_winner']]++;
    }
    else{
        luckiestTeam[match['toss_winner']]=1;
    }
})
.on("end",function(){
      console.log(sorting(luckiestTeam));
    
})

function sorting(obj){
  var output=[]
    for(let i in obj){
        let temp=[];
        temp[0]=i;
        temp[1]=obj[i]
      output.push(temp); 
  }   
      output.sort((a,b)=>{
        return b[1]-a[1];
    })
    return output;
}