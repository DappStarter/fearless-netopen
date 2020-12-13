require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember smile inner knee bone tag'; 
let testAccounts = [
"0x2b9fb2ce232468643f7c47a242689ba079c1deb59d8b48784827526b7127ddb5",
"0x853845c9e382ff85a463cabf9869619209924ad24aded5da6e99797b62c8ecc1",
"0x12a6490740d84a45f72b84f24568c41a053d070ba2749570b90678f8513a86ae",
"0x83d5cb803038ab7ba1bff173c5481e07af9ec99bca84ece62745f4f844335305",
"0x9894bb002303e93418bcda8d5c3ba09eac077bb1e963c4c4d7799ccdbd97a773",
"0x7fed0909470bf37e95337f8e2a2161dedae532d1f1d25ea802f9ab470fa2b073",
"0x4bd7fdce5d49269b8f1b3a45e933a9b4a6ad65fe6e03b00d0a8e5782f196a2e3",
"0xdb185d541b34e62c3f436d32ac956d918f11e5e742a668e482a250de510c3102",
"0x8ce6d1018cef81499e81e8aac0382ce65aeba016f848ba741933b632781b58f6",
"0xbd76a21092f232aaddf682016a5b270dccfeda9f913c1c5599d76dfea3abd311"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
