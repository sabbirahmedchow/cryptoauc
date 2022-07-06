<template>
  <div class="simplewallet">
    <div class="content">
      <h3>Example of a simple wallet contract</h3>
      <p v-if="contractAddress">The contract is deployed at {{contractAddress}}</p>
      <p v-if="!contractAddress">No contracts found</p>
      <p v-if="account">Current account: {{account}}</p>
      <p v-if="!account">No accounts found</p>
      <input v-model="newValue" type="number">
      <button @click="sendBalance">Send Balance</button>
      <p v-if="currentBalance">Balance read from the contract: {{currentBalance}}</p>
      <p v-if="!currentBalance">Balance not set</p>
      <p><input v-model="w_amount" type="number"  /> <button @click="withdrawAmount">WithDraw Amount</button></p>
    </div>
    <div class="message" v-if="message">{{message}}</div>
  </div>
</template>

<script>
import artifacts from '../../build/contracts/SimpleWallet.json'

// import contract from 'truffle-contract'
const Web3 = require('web3')
const contract = require('truffle-contract')
var web3
const SimpleWallet = contract(artifacts)

export default {
  name: 'SimpleWallet',
  data () {
    return {
      message: null,
      contractAddress: null,
      account: null,
      newValue: 0,
      currentBalance: 0,
      w_amount: 0
    }
  },
  async created () {
    if (window.ethereum) {
    // checks accounts connected
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    console.log('accounts :>> ', accounts)
    if(accounts.length == 0){
       // redirect if no accounts found
       //window.location.replace('http://my-home-age-url')
    }
}else{
    console.log('Metamask not detected')
    //window.location.replace('http://my-home-age-url')
}
    // if (window.ethereum) { // first we check if metamask is installed
    //   window.ethereum.request({ method: 'eth_requestAccounts' })
    //     .then(() => {
    //       this.connected = true // If users successfully connected their wallet
    //     })
    // }
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(ethereum.currentProvider)
      SimpleWallet.setProvider(new Web3(ethereum.currentProvider))
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
      SimpleWallet.setProvider(new Web3.providers.HttpProvider('http://localhost:7545'))
    }
    if (!web3.isConnected()) {
      console.log('not-connected')
    } else {
      console.log('connected')
    }
    // if (typeof web3 !== 'undefined') {
    //   console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 Fluyd, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    //   // Use Mist/MetaMask's provider
    //   // web3 = new Web3('http://localhost:8545')
    //   web3 = new Web3(Web3.currentProvider)
    // } else {
    //   console.warn("No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask")
    //   // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    //   web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))
    // }
    this.account = web3.eth.accounts[0]
    SimpleWallet.deployed()
      .then((instance) => instance.address)
      .then((address) => {
        this.contractAddress = address
        this.getBalance()
      })
  },
  methods: {
    sendBalance () {
      this.message = 'Transaction started'
      return SimpleWallet.deployed()
        .then(() => web3.eth.sendTransaction({from:this.account,to:this.contractAddress,value:web3.toWei(this.newValue,'ether')}))
        .then(() => {
          this.message = 'Transaction done'
          this.getBalance()
        })
        .catch((e) => {
          console.error(e)
          this.message = 'Transaction failed'
        })
    },
    getBalance () {
      // let contract = new web3.eth.Contract(abi, contractAddress)

      // contract.methods.get().call()
      //   .then(console.log())
      SimpleWallet.deployed().then((instance) => instance.getBalance()).then((r) => {
        console.log(r.toString())
        this.currentBalance = r.toString()
      })
    },
    withdrawAmount () {
      this.message = 'Transaction started';
      return SimpleWallet.deployed()
        .then((instance) => instance.withdraw(this.w_amount.toString(), {from: this.account}))
        .then(() => {
          this.message = 'Transaction done'
          this.getBalance()
        })
        .catch((e) => {
          console.error(e)
          this.message = 'Transaction failed'
        })
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content {
  padding: 13px 13px 39px 13px;
}
.message {
  background: #eee;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 13px;
  line-height: 1;
  padding: 13px;
}
</style>
