var fs = require('fs');
var csv = require('fast-csv');
var deliveriesStream = fs.createReadStream("deliveries.csv");
var bowlerEconomy = {};
var bowlerData = {};

csv
    .fromStream(deliveriesStream, {
        headers: true
    })
    .on("data", function (delivery) {
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
    .on("end", function () {
        bowlerEconomy = calculateEconomy(bowlerData);
        console.log(bowlerEconomy);
    })


function calculateEconomy(obj) {
    let result = {};
    for (let bowler in obj) {
        let economy = 0;
        let over = 0;
        if (!(/balls/).test(bowler)) {
            if (parseInt(obj[bowler + 'balls']) > 50) {
                over = parseInt(obj[bowler + 'balls']) / 6;
                economy = (parseInt(obj[bowler])) / over;
                result[bowler] = economy.toFixed(2);
            }
        }
    }

    return sorting(result);
}

function sorting(obj) {
    var arr = []
    for (let i in obj) {
        let ar = [];
        ar[0] = i;
        ar[1] = obj[i]
        arr.push(ar);
    }
    arr.sort((a, b) => {
        return a[1] - b[1];
    })
    return arr;
}