<template>
 <section class="signin_area pt-100 pb-30"><!-- start sign in area -->	
		<div class="container"><!-- start container -->		
			<div class="row"><!-- start row -->			
				<div class="col-md-6"><!-- start col-6 -->
					<div class="form_bg_area account_img mr-20 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
						<img src="img/extra/signup.png" alt="contact" class="responsive-fluid" />
					</div>
				</div><!-- end col-6 -->
				<div class="col-md-6"><!-- start col-6 -->
					<div class="acount_form_bg text-center wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s" style="visibility: visible; animation-duration: 0.4s; animation-delay: 0.4s;">
						<div class="form-title pt-30">
							<h2 class="account_form_title span-color"> Create your profile</h2>
													
						</div>
						<div class="row mt-5"><!-- start row -->
							<div class="col-md-12">
								<div class="account_form_area text-center">
									<form id="account-form" @submit = "submitProfile" method="post">
										<div class="row">
											<div class="form-group account_input col-md-12 pb-10">
												<input type="email" name="email" v-model="profile.email" class="form-control account_style" id="email" placeholder="Email here" required="required">
											</div>
											<div class="form-group account_input col-md-12 pb-10">
												<input type="text" name="username" v-model="profile.username" class="form-control account_style" id="username" placeholder="User name" required="required">
											</div>
											<div class="form-group account_input col-md-12 pb-10">
												<input name="bio" class="form-control account_style" v-model="profile.bio" id="bio" placeholder="Bio" required="required" style="margin-left:25px;">
											</div>
											<div class="form-group account_input col-md-12 pb-10">
												<input type="file" title="Profile Picture" name="pro_pic" class="form-control account_style" id="pro_pic" placeholder="Profile Picture" style="margin-left:25px;">
											</div>	
											<div class="form-group account_input col-md-12 pb-10">
												<input readOnly name="wallet_id" v-model="profile.walletId" class="form-control account_style" id="wallet_id" placeholder="Wallet Address" required="required" style="margin-left:25px;">
											</div>								
											<div class="col-md-12">
												<div class="actions pt-20">
													<input type="submit" value="Create Profile" name="submit" id="submitButton" class="btn btn-account btn-contact-bg" >
												</div>
											</div>
										</div>
									</form>
								</div>                          
							</div>
							<div class="col-md-12">&nbsp;</div>
						</div><!-- end row -->					
					</div><!-- end account form bg -->
				</div><!-- end col-6 -->				
			</div><!-- start row -->			
		</div><!-- end container -->	
	</section><!-- end sign in area -->   
</template>

<script>
import { useRoute } from 'vue-router';
	
export default{
    name: 'CreateProfile',
	data(){
		return{
		profile:{
			email: "",
			username: "",
			bio: "",
			walletId: ""
		},
		
		}
	},
	mounted(){
		
         const route = useRoute();
		 this.profile.walletId = route.query.walletId;
		
	},

	methods:{
		async submitProfile(e)
		{
			e.preventDefault();

			try {
				await this.axios.post("/saveProfile", this.profile).then(response => {
				if(response.data.msgError != null)
				{
					this.iziToast.error({
						position: "topCenter",
						title: "Error",
						message: response.data.msgError,
						color: '#ff0000',
					});
				return false;
				}
				else
				{
				this.iziToast.success({
					position: "topCenter",
					title: "Success",
					message: response.data.msgSuccess,
					
					});
					localStorage.setItem('user', JSON.stringify(response.data.userInfo));
				} 
				})
			} 
			catch (err) {
				console.log("Error:", err);
			}
			
			},
		}
		
	}
</script>