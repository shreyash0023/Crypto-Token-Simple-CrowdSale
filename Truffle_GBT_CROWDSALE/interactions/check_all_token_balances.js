/* This script reads the balances stored in the GB Token contract 
 * for all 10 accounts initialized on this personal (Ganache) blockchain.
 */

var GBToken = artifacts.require("./GBTokenAndCrowdsale.sol");

module.exports = function(callback) { 

    var balances = [];
    
    GBToken.deployed()
    .then(function(instance){
        var promiseArray = [];

        for (var i = 0; i < 10; i++){
            promiseArray.push(instance.getBalance(web3.eth.accounts[i]));
        }
        
        return Promise.all(promiseArray);
    })
    .then(function(values){
        var balances = values.map(v => v.toNumber());
        console.log(balances);
        return;
    });
}