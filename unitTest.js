var expect = require('chai').expect;
var luckiestTeam = require('./luckiestTeam.js'); 
var obj = [{
    'season': 2017,
    'toss_winner': 'csk',
    }, {
    'season': 2017,
    'toss_winner': 'csk',
    }, {
    'season': 2017,
    'toss_winner': 'MI',
    }, {
    'season': 2017,
    'toss_winner': 'srh',
    }, {
    'season': 2017,
    'toss_winner': 'MI',
    }, {
    'season': 2017,
    'toss_winner': 'csk',
    }, {
    'season': 2017,
    'toss_winner': 'dd',
    }, {
    'season': 2017,
    'toss_winner': 'gl',
    }, {
    'season': 2017,
    'toss_winner': 'csk',
    }, {
    'season': 2017,
    'toss_winner': 'csk',
    }, {
    'season': 2017,
    'toss_winner': 'csk',
    }]

describe('luckiestTeam' , function(){
    it('should tell team winning most tosses in year 2017 ipl' , function(){
        var answer = ['csk', 6]
        expect(luckiestTeam.getTossWon(obj)[0]).to.equal(answer[0]);
        expect(luckiestTeam.getTossWon(obj)[1]).to.equal(answer[1]);
    })
})
