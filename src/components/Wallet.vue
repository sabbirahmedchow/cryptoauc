<template>
  	<div class="dark-bg-all wallet-connent pt-100 pb-10"><!-- start dark bg area -->
		<div class="container"><!-- start container -->
			<div class="row"><!-- start row -->
				<div class="col-md-6 col-sm-12 mt-10 pb-10"><!-- start col-6 -->
					<div data-splitting class="section_intro wow fadeInUp" data-wow-duration=".003s" data-wow-delay=".003s">
						<p>&nbsp;</p>
						<h2 class="section_heading">Connect Wallet Easily</h2>
					</div>
				</div><!-- end col-6 -->
				
			</div><!-- end row -->		
			<div class="row"><!-- start row -->
				<div class="col-md-4 col-sm-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"><!-- start col-4 -->
					<div class="single_product wallet-single mt-50 pb-30"> <!-- Single Product -->
						<a href="#" @click.prevent="metaMaskConnect" class="wallet_link">		
							<div class="wallet_single_bg">
								<img src="img/wallet/1.png" alt="" class="responsive-fluid" />
								<h6 class="wallet-name">MetaMask</h6>
							</div>
							<p class="wallet-description">MetaMask is a software cryptocurrency wallet used to interact with Ethereum.</p>
						</a>
						<a href="signin.html" class="arrow-wallet">Connect Wallet<i class='bx bx-arrow-back'></i></a>
					</div> <!-- End Single Product -->
				</div> <!-- End col-4 -->
				<div class="col-md-4 col-sm-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"><!-- start col-4 -->
					<div class="single_product wallet-single mt-50 pb-30"> <!-- Single Product -->
						<a href="#" @click.prevent="connectAutherium" class="wallet_link">		
							<div class="wallet_single_bg">
								<img src="img/wallet/2.png" alt="" class="responsive-fluid" />
								<h6 class="wallet-name">Autherium</h6>
							</div>
							<p class="wallet-description">It is a digital platform that enables clients to buy and sell on a digitalised system.</p>
						</a>
						<a href="signin.html" class="arrow-wallet">Connect Wallet<i class='bx bx-arrow-back'></i></a>
					</div> <!-- End Single Product -->
				</div> <!-- End col-4 -->
				<div class="col-md-4 col-sm-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"><!-- start col-4 -->
					<div class="single_product wallet-single mt-50 pb-30"> <!-- Single Product -->
						<a href="#" @click.prevent="connectWalletConnect" class="wallet_link">		
							<div class="wallet_single_bg">
								<img src="img/wallet/3.png" alt="" class="responsive-fluid" />
								<h6 class="wallet-name">WalletConnect</h6>
							</div>
							<p class="wallet-description">An open source protocol for connecting applications to mobile wallets with QR code.</p>
						</a>
						<a href="signin.html" class="arrow-wallet">Connect Wallet<i class='bx bx-arrow-back'></i></a>
					</div> <!-- End Single Product -->
				</div> <!-- End col-4 -->
				<div class="col-md-4 col-sm-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"><!-- start col-4 -->
					<div class="single_product wallet-single mt-50 pb-30"> <!-- Single Product -->
						<a href="#" @click.prevent="connectTorus" class="wallet_link">		
							<div class="wallet_single_bg">
								<img src="img/wallet/4.png" alt="" class="responsive-fluid" />
								<h6 class="wallet-name">Torus</h6>
							</div>
							<p class="wallet-description">Integrate Wallet by Torus into your app and get a direct connection to Ethereum, Polygon.</p>
						</a>
						<a href="signin.html" class="arrow-wallet">Connect Wallet<i class='bx bx-arrow-back'></i></a>
					</div> <!-- End Single Product -->
				</div> <!-- End col-4 -->
				<div class="col-md-4 col-sm-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"><!-- start col-4 -->
					<div class="single_product wallet-single mt-50 pb-30"> <!-- Single Product -->
						<a href="#" @click.prevent="connectFortmatic" class="wallet_link">		
							<div class="wallet_single_bg">
								<img src="img/wallet/5.png" alt="" class="responsive-fluid" />
								<h6 class="wallet-name">Fortmatic</h6>
							</div>
							<p class="wallet-description">Points the way towards a world in which users identity and the best way is decentralized.</p>
						</a>
						<a href="signin.html" class="arrow-wallet">Connect Wallet<i class='bx bx-arrow-back'></i></a>
					</div> <!-- End Single Product -->
				</div> <!-- End col-4 -->
				<div class="col-md-4 col-sm-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"><!-- start col-4 -->
					<div class="single_product wallet-single mt-50 pb-30"> <!-- Single Product -->
						<a href="signin.html" class="wallet_link">		
							<div class="wallet_single_bg">
								<img src="img/wallet/6.png" alt="" class="responsive-fluid" />
								<h6 class="wallet-name">Coinbase Wallet</h6>
							</div>
							<p class="wallet-description">Coinbase the easiest and most secure crypto wallet. Download our new Wallet extension.</p>
						</a>
						<a href="signin.html" class="arrow-wallet">Connect Wallet<i class='bx bx-arrow-back'></i></a>
					</div> <!-- End Single Product -->
				</div> <!-- End col-4 -->		
			</div><!-- End row -->
		</div><!-- End container -->
	</div><!-- End dark bg area -->
    <div>&nbsp;</div>
</template>
<script>
import Authereum from "authereum";
import Web3 from 'web3';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Torus from "@toruslabs/torus-embed";
import Fortmatic from 'fortmatic';
var web3;
var web3 = new Web3(window.ethereum);
var account;
export default{
	
    name: 'Wallet',
	methods:{
		async metaMaskConnect(){
			ethereum
				.request({ method: 'eth_requestAccounts' })
				.then(handleAccountsChanged)
				.catch((err) => {
				if (err.code === 4001) {
					// EIP-1193 userRejectedRequest error
					// If this happens, the user rejected the connection request.
					alert('Please connect to MetaMask.');
				} else {
					alert(err);
				}
				});


        
/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/

const chainId = await ethereum.request({ method: 'eth_chainId' });
handleChainChanged(chainId);

ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(_chainId) {
  // We recommend reloading the page, unless you must do otherwise
  //window.location.reload();
  console.log("dhukse"); 
  account = web3.eth.accounts[0];
  getWalletBalance(account);
  
  
}

/***********************************************************/
/* Handle user accounts and accountsChanged (per EIP-1193) */
/***********************************************************/

let currentAccount = null;
ethereum
  .request({ method: 'eth_accounts' })
  .then(handleAccountsChanged)
  .catch((err) => {
    // Some unexpected error.
    // For backwards compatibility reasons, if no accounts are available,
    // eth_accounts will return an empty array.
    console.error(err);
  });

// Note that this event is emitted on page load.
// If the array of accounts is non-empty, you're already
// connected.
ethereum.on('accountsChanged', handleAccountsChanged);

// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    alert('Please connect to MetaMask.');
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
	
    // Do any other work!
  }

  
}
function getWalletBalance(account){
	web3.eth.getBalance(account, (err, balance) => {
		if(err) alert(err);
		const accbalance = web3.fromWei(balance, "ether");
		localStorage.setItem("userBalance", accbalance);
	     
	});
	
	
  }





		// 	if (window.ethereum) {
				
		// 	// checks accounts connected
		// 	const accounts = await window.ethereum.request({
		// 	method: 'eth_requestAccounts',
			
		// 	})
		// 	//var web3 = new Web3(window.ethereum);
		// 	ethereum.on('accountsChanged', (accounts) => {
		// 	// Handle the new accounts, or lack thereof.
		// 	// "accounts" will always be an array, but it can be empty.
		// 	console.log(accounts);
		// 	});

		// 	ethereum.on('chainChanged', (chainId) => {
		// 	// Handle the new chain.
		// 	// Correctly handling chain changes can be complicated.
		// 	// We recommend reloading the page unless you have good reason not to.
		// 	console.log(chainId);
		// 	web3 = new Web3(ethereum.currentProvider)
		// 	web3.eth.getBalance(accounts[0], (err, balance) => {
		// 		const accbalance = web3.fromWei(balance, "ether") + " ETH"
		// 		console.log('account balance :>> ', accbalance)
		// 		});
		// 	});
			

			
		// 	this.$router.push({ path: '/create-profile', query: { walletId: accounts[0] } })
		// 	} 
		//   else{
		// 	alert("MetaMask is not detected. Please install MetaMask and try again.")
		//   }
		try {
			    var walletId = account;
				await this.axios.post("/checkUser", {walletAddr: walletId}).then(response => {
				if(response.data == "null")
				{
				  this.$router.push({ path: '/create-profile', query: { walletId: account} })	
				}
				else
				{
				  localStorage.setItem('user', JSON.stringify(response.data.userInfo));	
				  this.$router.push({ path: '/'})
				} 
				})
			} 
			catch (err) {
				console.log("Error:", err);
			}
			
    },
	async connectAutherium(){
		    const authereum = new Authereum('rinkeby')
		    const provider = authereum.getProvider()
            const web3 = new Web3(provider)
			await provider.enable()
            const accounts = await web3.eth.getAccounts() 
		},
		
		async connectWalletConnect(){
			const provider = new WalletConnectProvider({
			rpc: {
				//1: "https://mainnet.mycustomnode.com",
				3: "https://ropsten.mycustomnode.com",
				//100: "https://dai.poa.network",
				// ...
			},
			});

			//  Enable session (triggers QR Code modal)
			await provider.enable();
            const web3 = new Web3(provider);
			provider.on("accountsChanged", (accounts) => {
			console.log(accounts);
			});

			// Subscribe to chainId change
			provider.on("chainChanged", (chainId) => {
			console.log(chainId);
			});

			// Subscribe to session disconnection
			provider.on("disconnect", (code, reason) => {
			console.log(code, reason);
			});
		},

		async connectTorus(){
		const torus = new Torus({
		buttonPosition: "top-left", // default: bottom-left
		});
		await torus.init({
		buildEnv: "production", // default: production
		enableLogging: true, // default: false
		network: {
			host: "kovan", // default: mainnet
			chainId: 42, // default: 1
			networkName: "Kovan Test Network", // default: Main Ethereum Network
		},
		showTorusButton: false, // default: true
		});
		await torus.login(); // await torus.ethereum.enable()
		const web3 = new Web3(torus.provider);
		const accounts = await web3.eth.getAccounts();
		console.log("Account", accounts[0]);
		},

		connectFortmatic(){
			const fm = new Fortmatic('pk_test_4F9696EC15943F4E');
            window.web3 = new Web3(fm.getProvider());
			const address = web3.currentProvider.enable();
		}

	}
}
</script>