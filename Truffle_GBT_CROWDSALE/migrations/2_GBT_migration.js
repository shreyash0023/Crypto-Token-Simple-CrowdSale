var GBToken = artifacts.require("./GBTokenAndCrowdsale.sol");

module.exports = function (deployer) {
   // pass parameter 'initialSupply' = 1000 tokens initially.
   // these will be assigned to account[0] by the contract constructor
   // once contract created and published
   deployer.deploy(GBToken, 1000);
};