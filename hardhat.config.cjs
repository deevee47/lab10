require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.28",
        settings: {},
      },
    ],
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/nA0KT5oVQ_EKD4kfLE0PCea0YER_p03-",
      accounts: [
        "cf2e0b108126f7bae50047b10df29721303dd865535fa161066c9a6fbddf637b",
      ],
      gasPrice: 100000000,
    },
  },
};
