require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture stone decrease mad mistake hunt nation flock swamp'; 
let testAccounts = [
"0x6b5a4a061a35b8970863084e00acaa12e97104f3d6f4345cb95391c785be490a",
"0x8d15bf453189eba6c214fefdfd2bce6c6cebe0153593d260c394ecbb3d8b07ae",
"0xcbc3167a9017b592628ac8fc9c5891f65e23032d843c7503fb3b509791d16b1f",
"0x13d3fcc5a8c2471742f9bfa196aadb9c7d738afdca0748d623e205f9cfea3064",
"0x6d188008cb64b681962d095a4935410356f8845df85356aca35b1d478b19fb78",
"0xe51d27ca9a28999cc1404ff4aa184d5075b8896e779319d7d9370e7627b144c7",
"0x132e56dfd0f9e417e1cc26ba1c87b5b700cea349a426dfeb64b7ad9fa6ca5c14",
"0x40a6d7de5140e3b75a4b742a284fb4fda5af439d6b9d14edf320f7ad42ba5411",
"0x1105ea7e122b4bab1f7cce68b0756bfeaa9f8fd13236c493001a9479eabc214c",
"0x7a4391bc95b55823f042a9dfc7af2c64bbd16767ba4eebc76e819476b9cfbe84"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


