(function(){
	angular
		.module('ccApp')
		.controller('BillWatchCtrl', BillWatchCtrl);

	function BillWatchCtrl($location, billSrv, bills, $http){
		var billWatchVm = this;

		// billWatchVm.bills = billSrv.getBills();
		billWatchVm.bills = bills;

		billWatchVm.toMainPage      = toMainPage;
		billWatchVm.toAboutPage     = toAboutPage;
		billWatchVm.toBillWatchPage = toBillWatchPage;
		billWatchVm.toPrivacyPage   = toPrivacyPage;
		billWatchVm.toTermsPage 	= toTermsPage;
		billWatchVm.voteYea 		= voteYea;
		billWatchVm.voteNay			= voteNay;

		//Link Pages
		function toMainPage(){
			$location.url('/home');
		}
		function toAboutPage(){
			$location.url('/about');
		}

		function toBillWatchPage(){
			$location.url('/billWatch');
		}

		function toPrivacyPage(){
			$location.url('/privacy');
		}

		function toTermsPage(){
			$location.url('/terms');
		}

		function voteYea(bill_id, yea){
			// for (var i = 0; billWatchVm.bills.length; i++){
			// 		console.log(billWatchVm.bills.length);
			// 	if (billWatchVm.bills[i].id == bill_id){
			// 		console.log(billWatchVm.bills[i].yea)
			// 	}

			// }
			if( localStorage.auth_token =='' || 
				localStorage.auth_token == undefined){
					$location.url('/login');
				} else{
					console.log(yea);
					billWatchVm.upYea = yea + 1;
					var vote  = { 
						yea: yea,
						bill_id: bill_id 
					};
						billSrv.vote(vote);
						billWatchVm.currYeaValue = billSrv.updateBillVote();
						console.log(billWatchVm.currYeaValue);
				}
					// $http.post('/vote', vote)
			// 	.then(function success(response){
			// 		console.log(response);
			// 		billWatchVm.bills.yea = response.data.yea;
			// 	}, function err(err){
			// 		console.log(err);
			// 	})
		}
		function voteNay(){
			console.log("nay");
		}

		function updateYea(){

		}
	}
})();