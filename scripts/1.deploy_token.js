// Runtime Environment's members available in the global scope.
//const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  // We get the contract to deploy / await hre.ethers.getContractFactory("Token")

  const Token = await ethers.getContractFactory("Token"); // fetch token

  const token = await Token.deploy(); // deploy
  await token.deployed();
  console.log(`Token Deployed to: ${token.address}`) 
  // address not given
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })