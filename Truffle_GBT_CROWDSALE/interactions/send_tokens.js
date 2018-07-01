/* This script transfers the specified number of tokens
 * from account[0] to the specified recipient account.
 */

var GBToken = artifacts.require("./GBTokenAndCrowdsale.sol");

module.exports = function(callback) { 


    var recipientAccount = web3.eth.accounts[4];
    var transferAmount = 100; // number of tokens

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
}