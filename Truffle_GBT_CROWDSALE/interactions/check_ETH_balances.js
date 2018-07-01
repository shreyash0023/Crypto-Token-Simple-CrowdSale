/* This script reads the ETH balances for all accounts
 * on this personal (Ganache) blockchain.
 */

module.exports = function(callback) { 

    for (var i = 0; i < web3.eth.accounts.length; i++){
        var balance = web3.eth.getBalance(web3.eth.accounts[i]).toNumber();
        console.log(web3.fromWei(balance, "ether"));
    }

}