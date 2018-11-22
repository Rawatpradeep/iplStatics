var getDetail = require('./getDetail.js')

var MatchData = getDetail.getMatchData('2015');
  let MatchId=[];
  for(let i in MatchData ){
      let detail = MatchData[i].split(',')
      MatchId.push(detail[0]);
  }
console.log(MatchId)
var DeleveriesData= getDetail.getDeliveriesData(MatchId[0],MatchId[MatchId.length-1]);