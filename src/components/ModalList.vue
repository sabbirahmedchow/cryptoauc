<template>
    <div class="modal fade popup" id="popup_share" tabindex="-1" role="dialog" aria-hidden="true"><!-- start share btn popup -->
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div class="modal-body space-y-20 p-40">
					<h3>Share with : </h3>
					<div class="share-btn"><!-- start place btn -->
						<ul class="share-icon-list">
							<li class="nav-item">
								<a href="#" class="share-icon1"><i class='bx bxl-facebook' ></i></a>
							</li>
							<li class="nav-item">
								<a href="#" class="share-icon2"><i class='bx bxl-linkedin' ></i></a>
							</li>
							<li class="nav-item">
								<a href="#" class="share-icon3"><i class='bx bxl-twitter' ></i></a>
							</li>
							<li class="nav-item">
								<a href="#" class="share-icon4"><i class='bx bxl-pinterest-alt' ></i></a>
							</li>
							<li class="nav-item">
								<a href="#" class="share-icon5"><i class='bx bxl-google-plus' ></i></a>
							</li>
							<li class="nav-item">
								<a href="#" class="share-icon6"><i class='bx bxl-instagram' ></i></a>
							</li>
						</ul>
					</div><!-- end share btn -->
				</div><!-- end modal body -->
			</div><!-- end modal content -->
		</div><!-- end modal dialog -->
	</div><!-- end  share btn popup -->	
	<div class="modal fade popup" id="popup_report_success" tabindex="-1" role="dialog" aria-hidden="true"><!-- start report successful -->
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div class="modal-body space-y-20 p-40">
					<h3 class="text-center">Your Report Successfuly Counted</h3>
					<p class="text-center">We will have taken against this item after reviewing. Thanks for your support.</p>
					<a href=" " class="btn btn-dark"> Watch More</a>
				</div>
			</div>
		</div>
	</div><!-- end report successful -->
	<div class="modal fade popup" id="popup_report" tabindex="-1" role="dialog" aria-hidden="true"><!-- start report input popup -->
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div class="modal-body space-y-20 p-40">
					<h3>Copyright Claim Against :</h3>
					<div class="input-field-form">
						<input type="text" class="form-control" placeholder="Explain behind the reason">			
					</div>
					<div class="hr"></div>
					<div class="place-bid-btn"><!-- start place btn -->
						<a href="#" class="btn btn-primary w-full popup-bid-btn" 
							data-toggle="modal" data-target="#popup_report_success" 
							data-dismiss="modal" aria-label="Close"> Submit Report
						</a>					
					</div><!-- end place btn -->
				</div><!-- end modal body -->
			</div><!-- end modal content -->
		</div><!-- end modal dialog -->
	</div><!-- end report input popup -->	
	<div class="modal fade popup" id="popup_bid_success" tabindex="-1" role="dialog" aria-hidden="true"><!-- start bid successful -->
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div class="modal-body space-y-20 p-40">
					<h3 class="text-center">Your Bid Successfuly Added</h3>
					<p class="text-center">Your bid <span class="color_text txt_bold">(5.511 ETH) </span> has been counted.</p>
					<a href=" " class="btn btn-dark"> Watch More</a>
				</div>
			</div>
		</div>
	</div><!-- end bid successful -->
	<div class="modal fade popup" id="popup_bid" tabindex="-1" role="dialog" aria-hidden="true"><!-- start bid input popup -->
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div class="modal-body space-y-20 p-40">
					<h3>Place a Bid</h3>
					<div class="d-flex justify-content-between">
						<p> service fee : </p>
						<p class="text-right color_black txt _bold"> .511 ETH </p>
					</div>
					<div class="d-flex justify-content-between last-child-bid">
						<p> You must bid at least : </p>
						<p class="text-right color_black txt _bold"> 5.00 ETH</p>
					</div>
					<div class="input-field-form">
						<input type="text" class="form-control" placeholder=" 5.00 ETH / UNIT">
						<p class="enter-quantity">Unit Quantity. <span class="offline-color">26 available</span></p>		
					</div>
					<div class="hr"></div>
					<div class="d-flex justify-content-between">
						<p> Total bid amount : </p>
						<p class="text-right color_black txt _bold"> 5.511 ETH </p>
					</div>
					<div class="place-bid-btn"><!-- start place btn -->
						<a href="#" class="btn btn-primary w-full popup-bid-btn" 
							data-toggle="modal" data-target="#popup_bid_success" 
							data-dismiss="modal" aria-label="Close"> Place bid
						</a>					
					</div><!-- end place btn -->
				</div><!-- end modal body -->
			</div><!-- end modal content -->
		</div><!-- end modal dialog -->
	</div><!-- end bid input popup -->
	<div class="modal fade popup" id="popup_history" tabindex="-1" role="dialog" aria-hidden="true"><!-- start bid history -->
		<div class="modal-dialog modal-dialog-centered" role="document"><!-- start modal-dialog -->
			<div class="modal-content"><!-- start modal-content -->
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div class="modal-body space-y-20 p-40"><!-- start modal-body -->
					<h4> Bidding Activity </h4>
					<div class="creator_item creator_card space-x-10"><!-- start creator item -->
						<div class="avatars space-x-10">
							<div class="media">
								<a href="Profile.html" class="btn-avatar">
									<i class='bx bxs-check-circle'></i>
									<img src="img/avatar/7.jpg" alt="Avatar" class="avatar avatar-md">
								</a>
							</div>
							<div class="bid-accepted">
								<p class="color_black">Bid accepted 
									<span class="color_brand">12 ETH</span> by <a class="color_black txt_bold" href="Profile.html">Amanda</a>
								</p>
								<span class="date color_text">18/11/2021, 17:54</span>
							</div>
						</div>
					</div><!-- end creator item -->
					<div class="creator_item creator_card space-x-10"><!-- start creator item -->
						<div class="avatars space-x-10">
							<div class="media">
								<a href="Profile.html" class="btn-avatar">
									<i class='bx bxs-check-circle'></i>
									<img src="img/avatar/4.jpg" alt="Avatar" class="avatar avatar-md">
								</a>
							</div>
							<div class="bid-accepted">
								<p class="color_black">Bid accepted 
									<span class="color_brand">5.511 ETH</span> by <a class="color_black txt_bold" href="Profile.html">Devid Monda</a>
								</p>
								<span class="date color_text">28/11/2021, 13:54</span>
							</div>
						</div>
					</div><!-- end creator item -->
				</div><!-- end modal-body -->
			</div><!-- end modal-content -->
		</div><!-- end modal-dialog -->
	</div><!-- end bid history -->	
</template>
<script>
export default{
    name: 'ModalList'
}
</script>