(function(){
	angular
		.module('ccApp')
		.controller('BillWatchCtrl', BillWatchCtrl);

	function BillWatchCtrl($location){
		var billWatchVm = this;

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