var fs = require('fs');
var data=[];
function getMatchData(year){
    //console.log("hi");
    var val =fs.readFileSync('matches.csv','utf8')
    data = getval(val,year); 
    return data; 
}
    function getval(val,year){
        let detail=val.split('\n');
        let da=[];
      // console.log(detail.length);
        for(let i=0;i<detail.length;i++){
              //console.log(detail[i].includes(year))
             if(detail[i].includes(year)){ 
             //console.log(detail[i])  
             da.push(detail[i]);   
             }
        }
       // console.log(da[0]);
        return da;
    }
    


// console.log(data)
//getData(2015);



module.exports = {
    getMatchData : getMatchData
}