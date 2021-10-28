const Tea = artifacts.require("Tea");

const testingWallet = "0x26910dc0106A326b6bbd84AD3df554aeA0E13524"

module.exports = async function (deployer, accounts) {
  console.log(accounts);
  await deployer.deploy(Tea, {from: testingWallet});
};
