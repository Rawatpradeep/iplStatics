var fs = require('fs');
var data=[];
function getMatchData(year){
    //console.log("hi");
    var val =fs.readFileSync('matches.csv','utf8')
    data = getval(val,year); 
    return JSON.parse(data); 
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
    
function getDeliveriesData(min,max){

    var delData=fs.readFileSync('deliveries.csv','utf8')
    var eachval = geteachVal(min,max,delData.split('\n'));
    //console.log(eachval.length);
    return eachval;
}

function geteachVal(min,max,arr){
    let del = [];
    for(let i=0;i<arr.length;i++)
    {
    let newArr=arr[i].split(",");
    let x= parseInt(newArr[0]);
    if(x>=min&&x<=max){
     del.push(arr[i]);
    // console.log(newArr[0]);
    }
    
}
//console.log(del.length);
return del;
}

// getDeliveriesData(3,3);
// console.log(getDeliveriesData())

module.exports = {
    getMatchData : getMatchData,
    getDeliveriesData:getDeliveriesData
}