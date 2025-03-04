const addressZero = "0x0000000000000000000000000000000000000000";
const ethAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
const wethAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const bentCVXAddress = "0x9E0441E084F5dB0606565737158aa6Ab6B970fE0";
const CVXAddress = "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B";
const pool2Address = "0xd564b2feec19df8f4d6cb52c0a4386d05a993583";
const sushiLpAddress = "0x5fa4370164a2fabeef159b893299d59ff5dc1e6d";
const bentAddress = "0x01597e397605bf280674bf292623460b4204c375";
const daiAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
const bentSingleStaking = "0x07228C1820b4a3D75206a6E61F1AdD1BB157ce80";

const bentPools = {
  BentPoolBentCvxCvx: "0xf083FBa98dED0f9C970e5a418500bad08D8b9732",
  BentPoolTriCrypto2: "0xb5a69B26920E1A430b1405Bc75a455d687328D67",
  BentPoolMIM: "0x397DD120bF0e6d0f2Af2e12f29d57Fb1A58c041c",
  BentPoolFrax: "0xD714e4cB809759ECf37067cfF56feCA887E3C168",
  BentPoolAlusd: "0x16b385cc9959BbE83905eA5E71820b406804d037",
  BentPoolSTETH: "0x9a50F371B262d8eE84879EEE70B8d41CBC904dd0",
  BentPoolMIMUST: "0x5D551CE7564b6D9B95559a70A5648af908a8AD09",
  BentPoolOUSD: "0x519590c576D4e0aA49B7614492B64ADB8669F52A",
  BentPoolCVXETH: "0xADe08F43C0bA6eAF8F7a100A8f773285b39caBb5",
  BentPoolCVXCRV: "0xf5306c00648c8aA07b8e451E2B4176FbA971A7dA",
  BentPoolD3Pool: "0xA9E82F48e1cE96e3cE80e6b7E495831823a98AE9",
  BentPoolUSTWormHole: "0x7c325F13395334a376D7D388FD3450d38488a1AF",
  BentPoolDola: "0xD6B8580a39A17b9fBea427fD50593970f4Ac31b6",
  BentPoolCrvEth: "0x5D77b731803916cbcdec2BBdb3Ad0649C6a6EA17",
};

const bentCVXSingleStaking = "0xe55C5069ED7F8fE2EA656aFf4551af52F8dbdeF7";

const crvRegistry = "0x90E00ACe148ca3b23Ac1bC8C240C2a7Dd9c2d7f5";

const bentMasterChefAddress = "0xfeAEA5e904D6e8B88888Ea1101c59F4084a94557";
const bentMasterChefPools = ["0xf083FBa98dED0f9C970e5a418500bad08D8b9732"];

const crvPoolByLpTokenAddress = {
  "0x3a283d9c08e8b55966afb64c515f5143cf907611":
    "0xb576491f1e6e5e62f1d8f26062ee822b40b0e0d4", // cvx-eth
  "0xed4064f376cb8d68f770fb1ff088a3d0f3ff5c4d":
    "0x8301ae4fc9c624d1d396cbdaa1ed877821d7c511", // crv-eth
  "0xc4ad29ba4b3c580e6d59105fff484999997675ff":
    "0xd51a44d3fae010294c616388b506acda1bfaae46", // tricrpyto2
  "0xfeaea5e904d6e8b88888ea1101c59f4084a94557":
    "0xf083fba98ded0f9c970e5a418500bad08d8b9732", // bentcvx-cvx
};

module.exports = {
  bentPools,
  crvPoolByLpTokenAddress,
  crvRegistry,
  addressZero,
  ethAddress,
  wethAddress,
  bentMasterChefAddress,
  bentMasterChefPools,
  bentCVXAddress,
  CVXAddress,
  bentCVXSingleStaking,
  bentSingleStaking,
  pool2Address,
  sushiLpAddress,
  bentAddress,
  daiAddress,
};
