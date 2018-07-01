/* This script transfers the specified Ether value
 * between sender and receiver account.
 */
module.exports = function(callback) { 
    // transfer 1 ETH from account[0] to account[1]
    var sender = web3.eth.accounts[0];
    var receiver = web3.eth.accounts[1];
    var amount = web3.toWei(1.0, "ether")
    return web3.eth.sendTransaction({from:sender, to:receiver, value: amount});
}