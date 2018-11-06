const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'dynamic proof submit hurt render have flip because hotel film hope return', 'https://rinkeby.infura.io/v3/5bbde5ab520d4b2088731c4ba6d45041'  
); 

const web3 = new Web3(provider);

// The only reason why we're using a function here
// is because await can't be used outside of one

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });
    
    console.log('Contract deployed to', result.options.address);
};
deploy();

