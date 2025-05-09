const hre = require("hardhat");

async function main() {
  const AwesomeGame = await hre.ethers.getContractFactory("AwesomeGame");
  const awesomeGame = await AwesomeGame.deploy(); // deploy the contract

  await awesomeGame.waitForDeployment(); // replaces .deployed()
  console.log(`Contract deployed to: ${awesomeGame.target}`); // use .target instead of .address
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
