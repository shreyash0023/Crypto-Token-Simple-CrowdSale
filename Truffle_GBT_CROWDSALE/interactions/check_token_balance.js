/* This script reads the balance stored in the GB Token contract 
 * for the specified account .
 */

var GBToken = artifacts.require("./GBTokenAndCrowdsale.sol");

module.exports = function(callback) { 
    var accountToCheck = web3.eth.accounts[0];

    GBToken.deployed()
    .then(function(instance){
        return instance.getBalance(accountToCheck);
    })
    .then(function(value){
        console.log(value.toNumber());
    });
}