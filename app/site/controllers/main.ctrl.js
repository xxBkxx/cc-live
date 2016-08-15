(function(){
	angular
		.module('ccApp')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl($location){
		var mainVm = this;

		mainVm.toMainPage = toMainPage;
		mainVm.toAboutPage = toAboutPage;
		mainVm.toBillWatchPage = toBillWatchPage;
		mainVm.toPrivacyPage = toPrivacyPage;
		mainVm.toTermsPage = toTermsPage;

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