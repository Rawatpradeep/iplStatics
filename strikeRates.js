var fs = require('fs');
var csv = require('fast-csv');
var deliveriesStream = fs.createReadStream("deliveries.csv");
var batsmenStrikeRate={};
var batsmanData={};

csv
.fromStream(deliveriesStream,{headers : true})
.on("data",function(delivery){
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
.on("end",function(){
      batsmenStrikeRate = calculateStrikeRate(batsmanData);
       console.log(batsmenStrikeRate);
    })


    function calculateStrikeRate(obj){
                 let result={};
               for(let batsman in obj){
                   let strikeRate =0;
                   if(!(/balls/).test(batsman)){
                       strikeRate = (obj[batsman]/obj[batsman+'balls'])*100;
                       result[batsman]=strikeRate.toFixed(2);
                   }
               }

                return sorting(result);
    }

    function sorting(obj){
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