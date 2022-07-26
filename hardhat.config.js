require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-web3");
require("hardhat-deploy");
require("hardhat-deploy-ethers");

require("dotenv").config();
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.6",
        settings: {
          optimizer: {
            enabled: true,
          },
        },
      },
      {
        version: "0.5.16",
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://speedy-nodes-nyc.moralis.io/fbb4b2b82993bf507eaaab13/bsc/testnet/archive`,
        blockNumber: 14328500,
      },
      blockGasLimit: 12000000,
    },
    mainnet: {
      url: `https://speedy-nodes-nyc.moralis.io/fbb4b2b82993bf507eaaab13/eth/mainnet/archive`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    bsc: {
      url: `https://speedy-nodes-nyc.moralis.io/fbb4b2b82993bf507eaaab13/bsc/mainnet`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    bsctest: {
      url: `https://speedy-nodes-nyc.moralis.io/fbb4b2b82993bf507eaaab13/bsc/testnet/archive`,
      accounts: [`0x${process.env.PRIVATE_KEY_TEST}`],
    },
    brisetest: {
      url: `https://testnet-rpc.brisescan.com`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    brise: {
      url: `https://node.thesphynx.co/mainnet`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
  mocha: {
    timeout: 10000 * 1000,
  },
};
