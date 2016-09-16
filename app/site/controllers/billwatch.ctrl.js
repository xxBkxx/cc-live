(function(){
	angular
		.module('ccApp')
		.controller('BillWatchCtrl', BillWatchCtrl);

	function BillWatchCtrl($window, $location, billSrv, billComments, bills, $http, commentSrv){
		var billWatchVm = this;

		// billWatchVm.bills = billSrv.getBills();
		billWatchVm.bills 			= bills;
		billWatchVm.billComments    = billComments;
		billWatchVm.toMainPage      = toMainPage;
		billWatchVm.toAboutPage     = toAboutPage;
		billWatchVm.toBillWatchPage = toBillWatchPage;
		billWatchVm.toPrivacyPage   = toPrivacyPage;
		billWatchVm.toTermsPage 	= toTermsPage;
		billWatchVm.voteYea 		= voteYea;
		// billWatchVm.voteNay			= voteNay;
		billWatchVm.comment         = comment;
		billWatchVm.readBill  		= readBill;

		console.log(billComments);
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

		function comment(bill_id){
			var comment = billWatchVm.billComment;
			billWatchVm.billComment = '';
			 var token = localStorage.getItem('auth_token');

			var commentPkg = {

				billId:  bill_id,
				comment: comment,
				token:   token
			}

			commentSrv.billComment(commentPkg);
			billWatchVm.userName = billSrv.updateCommentName();
			console.log(billWatchVm.userName);
		}	

		function voteYea(decision, bill_id, billVote){
			// for (var i = 0; billWatchVm.bills.length; i++){
			// 		console.log(billWatchVm.bills.length);
			// 	if (billWatchVm.bills[i].id == bill_id){
			// 		console.log(billWatchVm.bills[i].yea)
			// 	}

			// }
			if( localStorage.auth_token =='' || 
				localStorage.auth_token == undefined){
					$location.url('/login');

				window.alert("please login to vote")
				} else{
					if(decision == 1){
						console.log(billVote);

						var vote  = { 
							yea: billVote,
							bill_id: bill_id 
						};

						billSrv.vote(1,vote);

					} else if(decision == 0){
						console.log(billVote);

						var vote = {
							nay: billVote,
							bill_id: bill_id
						};

						billSrv.vote(0,vote);
					}
						billWatchVm.currYeaValue = billSrv.updateBillVote();
						// console.log(billWatchVm.currYeaValue);
				}
					// $http.post('/vote', vote)
			// 	.then(function success(response){
			// 		console.log(response);
			// 		billWatchVm.bills.yea = response.data.yea;
			// 	}, function err(err){
			// 		console.log(err);
			// 	})
		}
		function readBill(bill_id){
			var billLink = 'http://www.parl.gc.ca/HousePublications/Redirector.aspx?RefererUrl=%2fHousePublications%2fPublication.aspx%3fLanguage%3dE%26Mode%3d1%26DocId%3d' +
				bill_id + '&File=4';
			$window.alert(billLink);
			$window.location.href = billLink;
		}

		function updateYea(){
		}
	}
})();