<template>
 <header id="header-area" class="header-transparent sticky">		
			<div class="mobile_menubar">
				<i class='bx bx-menu'></i>
			</div><!-- End Mobile menu  -->			
			<div class="main-menu-area"> <!-- start main menu area -->
				<div class="container container-main-menu">
					<div class="main-menu d-flex align-items-center">
						<div class="logo"> <!-- start logo  -->
							<router-link to='/'><a href="#" class="navbar-brand">
								<img src="img/logo.png" alt="logo">
							</a>
							</router-link>
							<a href="index-2.html" class="navbar-icon">
								<img src="img/favicon.png" alt="logo">
							</a>
						</div> <!-- End logo  -->
						<div class="input-main"> <!-- start search bar  -->
							<input class="input" type="text" placeholder="Search...">
							<button type="submit">
								<i class="bx bx-search"></i>
							</button>			
						</div> <!-- end search bar  -->			
						<div class="menu d-flex"> <!-- start menu  -->
							<nav class="navigation" id="mobile-menu">
								<ul class="menu-list list-style-none mb-0"> <!-- start ul  -->
									<li><a href="index-2.html">Home</a></li>
									<li class="has-children"><a href="#">Explore</a>
										<ul class="sub-menu">
											<li><a href="explores.html">Explore One</a></li>
											<li><a href="live.html"> Live Auction</a></li>
											<li><a href="collection.html"> Collection</a></li>
											<li><a href="item-details.html">Item Details</a></li>
										</ul>
									</li>
									<li class="has-children"><a href="#">Community</a>
										<ul class="sub-menu">
											<li><a href="blog.html">News & Press</a></li>
											<li><a href="blog-details.html">Single Blog</a></li>
											<li><a href="faqs.html">Help Center</a></li>
										</ul>
									</li>
									<li class="has-children"><a href="#">Pages</a>
										<ul class="sub-menu">
											<li><a href="signin.html">My Account</a></li>
											<li><a href="signup.html">Sign Up</a></li>
											<li><a href="authors.html">Authors</a></li>
											<li><a href="author-details.html">Author Details</a></li>
											<li><a href="terms-conditions.html">Terms & Conditions</a></li>
											<li><a href="about.html">About Us</a></li>
											<li><a href="contact.html">Contact Us</a></li>
											<li><a href="privacy.html">Privacy Policy</a></li>
											<li><a href="wallet.html">Connect Wallet</a></li>
										</ul>
									</li>
									<li><a href="activity.html">Activity</a></li>
								</ul> <!-- end ul  -->
							</nav> <!-- end nav  -->
						</div><!-- end menu  -->
						<div class="action-nav">
							<div class="profile-nav-main">
								<div class="profile-nav">
									<div class="img-otr">
										<img class="nav-prof-img" src="img/avatar/1.jpg" alt="Avatar" @click="showBox">
										<i class="bx bxs-check-circle"></i>
									</div>
								</div><!-- end profile-nav  -->
								<div class="profile-pop-otr" v-if="toggleBox" v-show="isLoggedUser">
									<div class="balance-otr">
										<div class="balance">
											<p class="text heading-S">Balance</p>
											<p class="price heading-L">{{twoDecimalUserBalance}} ETH</p>
										</div>
										<div class="img-etherem">
											<img class="etherem" src="img/avatar/ethereum.png" alt="img">
										</div>
									</div><!-- end balance  -->
									<div class="copy-icon-otr">
										<span id="wallet" class="profile_wallet text heading-SB">{{userWalletId['wallet']}}</span>
										<button id="btn_copy" title="Copy Text">
											<i class='bx bx-copy-alt'></i>
										</button>
									</div><!-- end copy link  -->
									<ul class="link-profile-ul">
										<li class="link-profile-li">
											<a href="#" class="link-profile-a heading-SB">My Item</a>
										</li>
										<li class="link-profile-li">
											<a href="#" class="link-profile-a heading-SB">Edit Profile</a>
										</li>
										<li class="link-profile-li">
											<a href="#" class="link-profile-a heading-SB">Upload File</a>
										</li>
										<li class="link-profile-li">
											<a href="#" @click="logout" class="link-profile-a heading-SB">Logout</a>
										</li>
									</ul><!-- end ul  -->
								</div><!-- end profile pop  -->
							</div><!-- end profile nav  -->
						</div><!-- end action nav  -->						
						<!-- Responsive Menu -->
						<div class="mobile-menu mobile-menu-preview"></div>
					</div><!-- end main menu  -->
					<div class="main-menu-icon"> <!-- start mobile menu icon  -->
						<span class="line line-1"></span>
						<span class="line line-2"></span>
						<span class="line line-3"></span>
					</div> <!-- end mobile menu icon  -->
				</div><!-- end container  -->
			</div><!-- end main menu area  -->
	</header> <!-- end header  -->
   
</template>
<script>
export default {
    name: 'navHeader',
	data(){
		return{
			toggleBox: false,
			isLoggedUser: false,
			userBalance: 0.00,
			userWalletId: ""
		}
	},

	computed: {
      twoDecimalUserBalance(){
      return Math.trunc(this.userBalance*100)/100;
	  
	 }
	},
	
	methods:{
		showBox(){
			if(localStorage.getItem('userBalance') != null)
            this.userBalance = localStorage.getItem('userBalance');
			this.userWalletId = JSON.parse(localStorage.getItem('user'));
            this.toggleBox = !this.toggleBox;
			if(localStorage.getItem('userBalance') != null){
			this.isLoggedUser = true;
		  }else{
			this.isLoggedUser = false;
			this.$router.push("wallet");
		  }
		  
		},
		async logout(){
			localStorage.clear();
			this.$router.push("wallet");
		}
	}
    
}
</script>