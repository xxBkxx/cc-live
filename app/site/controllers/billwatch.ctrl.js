(function(){
	angular
		.module('ccApp')
		.controller('BillWatchCtrl', BillWatchCtrl);

	function BillWatchCtrl($location, bills){
		var billWatchVm = this;
		// billWatchVm.bills = billSrv.getBills();
		billWatchVm.bills = bills;
		console.log(billWatchVm.bills[0].title);

		billWatchVm.toMainPage = toMainPage;
		billWatchVm.toAboutPage = toAboutPage;
		billWatchVm.toBillWatchPage = toBillWatchPage;
		billWatchVm.toPrivacyPage = toPrivacyPage;
		billWatchVm.toTermsPage = toTermsPage;

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
	}
})();