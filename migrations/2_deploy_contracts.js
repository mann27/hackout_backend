const Migrations = artifacts.require("BStore");

module.exports = function(deployer) {
  deployer.deploy(BStore);
};
