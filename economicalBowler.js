var getDetail = require('./getDetail.js')

var MatchData = getDetail.getMatchData('2015');
  let MatchId=[];
  for(let i in MatchData ){
      let detail = MatchData[i].split(',')
      MatchId.push(detail[0]);
  }
//console.log(MatchId)
var DeleveriesData= getDetail.getDeliveriesData(MatchId[0],MatchId[MatchId.length-1]);
//console.log(DeleveriesData[DeleveriesData.length-1]);

let BowlerData=[];
let BowlerObj={};
let Ball=1;
let count=1;
for(let i=0;i<DeleveriesData.length-1;i++){
  let singleval=DeleveriesData[i].split(',');
  if(singleval[8]==(DeleveriesData[i+1].split(',')[8])){
    count++;
  if(BowlerObj.hasOwnProperty(singleval[8])){
    BowlerObj[singleval[8]]= BowlerObj[singleval[8]]+parseInt(singleval[17])
    if(count<=6){
    BowlerObj[singleval[8]+"Ball"]++;
                }
                else{
                  count=1;
                }
  }
  else{
    BowlerObj[singleval[8]]=parseInt(singleval[17]);
    BowlerObj[singleval[8]+"Ball"]=Ball;
  }
}
else{
  if(BowlerObj.hasOwnProperty(singleval[8])){
    BowlerObj[singleval[8]]= BowlerObj[singleval[8]]+parseInt(singleval[17]);
    if(count<=6){
      BowlerObj[singleval[8]+"Ball"]++;
                  }
                  else{
                    count=1;
                  }
  }
  else{
    BowlerObj[singleval[8]].Runs=parseInt(singleval[17]);
    BowlerObj[singleval[8]+"Ball"]=Ball;
  }
}
}
//console.log(BowlerObj);
 let Bowler ={};
 for(let i in BowlerObj){
   if(!(/Ball/).test(i)){
     let over = parseInt(BowlerObj[i+"Ball"])/6;
     //console.log(parseInt(BowlerObj[i])/over);
     Bowler[i]=(parseInt(BowlerObj[i])/over);
     
   }
   else{
     continue;
   }
   }
 
 var sortable = [];
for (var Bowlers in Bowler) {
    sortable.push([Bowlers, Bowler[Bowlers]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});
BowlerData.push(sortable)
for(let i= 0 ; i<10; i++){
console.log(BowlerData[0][i]);
}