(function(){
	angular
		.module('ccApp')
		.controller('AboutCtrl', AboutCtrl);

	function AboutCtrl($location){
		var aboutVm = this;

		aboutVm.toMainPage = toMainPage;
		aboutVm.toBillWatchPage = toBillWatchPage;
		aboutVm.toPrivacyPage = toPrivacyPage;
		aboutVm.toTermsPage = toTermsPage;

		function toMainPage(){
			$location.url('/home');
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