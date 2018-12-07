var matchId =[];

// Getting the luckiest Team 
function getLuckiestTeam(matchData){
    
    matchData.forEach((match)=>{
        if (luckiestTeam.hasOwnProperty(match['toss_winner'])) {
            luckiestTeam[match['toss_winner']]++;
        } else {
            luckiestTeam[match['toss_winner']] = 1;
        }
    })  
    return sortingDec(luckiestTeam); 
}



//getting the strikeRate of the Each Batsman in decreasing order
     function getStrikeRate(deliveryData){
        var strikeRate={};
        var batsmanData =getBatsmanData(deliveryData);
        strikeRate = calculateStrikeRate(batsmanData);
        console.log(strikeRate);
    }

     function getBatsmanData(data){
            var batsmanData = {}
            data.forEach((delivery)=>{
                if(batsmanData.hasOwnProperty(delivery['batsman'])){
                    if(parseInt(delivery['wide_runs'])===0){
                      batsmanData[delivery['batsman']] += parseInt(delivery["batsman_runs"])  
                      batsmanData[delivery['batsman']+'balls']++;
                    }
                }
                    else{
                        if(parseInt(delivery['wide_runs'])===0){
                            batsmanData[delivery['batsman']] = parseInt(delivery["batsman_runs"])  
                            batsmanData[delivery['batsman']+'balls'] = 1;
                          }
                }
            
            })
            return batsmanData;
     }
    
     function calculateStrikeRate(batsmanData){
    let result={};
        for(let batsman in batsmanData){
            let batsmanstrikeRate = 0;
            if(!(/balls/).test(batsman)){
                batsmanstrikeRate = (batsmanData[batsman]/batsmanData[batsman+'balls'])*100;
                result[batsman]=batsmanstrikeRate.toFixed(2);
            }
        }

         return sortingDec(result);
     }
// getting the economy of bowler in death over (min ~8overs) in increasing order
        
     function getDeathBowler(deliveryData){
        var bowlerEconomy = {};
        var bowlerData = getBowlerData(deliveryData);
        // console.log(bowlerData)
        bowlerEconomy = calculateEconomy(bowlerData);
        return bowlerEconomy;
     }

     function getBowlerData(deliveryData){
         var bowlerData = {};
         deliveryData.forEach((delivery)=>{
            if (delivery['over'] >= 16 && delivery['over'] <= 20) {
                if (bowlerData.hasOwnProperty(delivery['bowler'])) {
    
                    if (parseInt(delivery['ball']) < 7) {
                        bowlerData[delivery['bowler']] += parseInt(delivery["total_runs"]);
                        bowlerData[delivery['bowler'] + 'balls']++;
                    } else {
                        bowlerData[delivery['bowler']] += parseInt(delivery["total_runs"]);
                    }
                } else {
                    bowlerData[delivery['bowler']] = parseInt(delivery["total_runs"])
                    bowlerData[delivery['bowler'] + 'balls'] = 1;
                }
            }
         })
         return bowlerData;
     }

     function calculateEconomy(bowlerData){
          var result = { }; 
        for(let bowler in bowlerData){
            let economy = 0;
            let over = 0;
            if (!(/balls/).test(bowler)) {
                if (parseInt(bowlerData[bowler + 'balls']) > 50) {
                    over = parseInt(bowlerData[bowler + 'balls']) / 6;
                    economy = (parseInt(bowlerData[bowler])) / over;
                    result[bowler] = economy.toFixed(2);
                }
            }
         }
        //  console.log(result)
         return sortingInc(result);
     }


// getting runs scored by team in powerplay in finals in decreasing order
      function getRunsScoredInPp(deliveryData, matchId){
          var runsScoredInPp= {};
          deliveryData.forEach((delivery)=>{
              if(matchId.includes(parseInt(delivery['match_id']))){
                 if(parseInt(delivery['over'])<=6){
                    if (runsScoredInPp.hasOwnProperty(delivery['batting_team'])) {
                        runsScoredInPp[delivery['batting_team']] += parseInt(delivery["total_runs"])
                    } else {
                        runsScoredInPp[delivery['batting_team']] = parseInt(delivery["total_runs"])
                    }
                  }
              }
          })
          
          return sortingDec(runsScoredInPp);
      }



//getting the matchId of final of each season
function getFinalMatchId(matchData){
var season=[];
var matchId = [];
matchData.filter(getMatchId)

function getMatchId(values){
      
      if(!(season.includes(values['season']))){
        season.push(values['season']) 
        var id = parseInt(values['id'])-1
          if(id>1){
              matchId.push(id);
              return true;
          }
      }
      return false;
}
matchId.push(parseInt(matchData[matchData.length-1]['id']))
return matchId;
}
// for sorting object according to values


function sortingDec(obj){
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
  function sortingInc(obj){
    var arr=[]
      for(let i in obj){
          let ar=[];
          ar[0]=i;
          ar[1]=obj[i]
        arr.push(ar); 
    }   
      arr.sort((a,b)=>{
          return parseInt(a[1])-parseInt(b[1]);
      })
      return arr;
  }
module.exports={
    getLuckiestTeam : getLuckiestTeam,
    getStrikeRate : getStrikeRate,
    getDeathBowler : getDeathBowler,
     getFinalMatchId : getFinalMatchId,
     getRunsScoredInPp : getRunsScoredInPp
}