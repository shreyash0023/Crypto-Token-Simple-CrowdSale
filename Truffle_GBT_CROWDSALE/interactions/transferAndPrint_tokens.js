/* This script reads the balances stored in the GB Token contract 
 * for all 10 accounts initialized on this personal (Ganache) blockchain.
 */

var GBToken = artifacts.require("./GBTokenAndCrowdsale.sol");

module.exports = function(callback) { 

    var balances = [];
    var recipientAccount = web3.eth.accounts[4];
    var transferAmount = 100; // number of tokens

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
        console.log("INITIAL TOKEN ARRAY:-"+balances);
        return;
    });




    var recipientAccount = web3.eth.accounts[4];
    var transferAmount = 1; // number of tokens

    GBToken.deployed()
    .then(function(instance){
            
    		try {
    
     instance.sendTokens(recipientAccount, transferAmount);
	}
		catch(err) {
    
    	if(instance.getBalance(web3.eth.accounts[0])<transferAmount)
    		return;
				}   
        // return instance.sendTokens(recipientAccount, transferAmount);

    });



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
         console.log("Sending tokens ..");
        console.log("FINAL TOKEN ARRAY:-"+balances);
        
        return;
    });

}