var getDetail = require('./getDetail.js')

var MatchData = getDetail.getMatchData('2016');
  let MatchId=[];
  for(let i in MatchData ){
      let detail = MatchData[i].split(',')
      MatchId.push(detail[0]);
  }

var DeleveriesData= getDetail.getDeliveriesData(MatchId[0],MatchId[MatchId.length-1]);

let extraruns = [];
let obj={};
for(let i=0;i<DeleveriesData.length;i++){
  let data= DeleveriesData[i].split(',');

  if(obj.hasOwnProperty(data[3])){
     obj[data[3]]= obj[data[3]]+parseInt(data[16]);    
  }
  else{
    obj[data[3]]= parseInt(data[16]);
  }
  
}
extraruns.push(obj);
console.log(extraruns);