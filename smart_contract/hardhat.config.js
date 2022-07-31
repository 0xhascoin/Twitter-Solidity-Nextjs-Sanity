require("@nomicfoundation/hardhat-toolbox");

let metamask_private_key = process.env.PRIVATE_KEY
let alchemy_api_key = process.env.ALCHEMY_API_KEY
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: alchemy_api_key,
      accounts: [metamask_private_key]
    }
  }
};
