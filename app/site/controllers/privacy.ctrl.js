(function(){
	angular
		.module('ccApp')
		.controller('PrivacyCtrl', PrivacyCtrl);

	function PrivacyCtrl($location){
		var privacyVm = this;

		privacyVm.toMainPage = toMainPage;
		privacyVm.toAboutPage = toAboutPage;
		privacyVm.toBillWatchPage = toBillWatchPage;
		privacyVm.toPrivacyPage = toPrivacyPage;
		privacyVm.toTermsPage = toTermsPage;

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