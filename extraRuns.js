var getDetail = require('./getDetail.js')

var data = getDetail.getMatchData('2016');
  let MatchId=[];
  for(let i in data ){
      let detail = data[i].split(',')
      MatchId.push(detail[0]);
  }


 console.log(MatchId);