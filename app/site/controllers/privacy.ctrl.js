(function(){
	angular
		.module('ccApp')
		.controller('PrivacyCtrl', function PrivacyCtrl($scope, $location, initUser){
		
		var privacyVm = this;

		privacyVm.toMainPage      = toMainPage;
		privacyVm.toAboutPage     = toAboutPage;
		privacyVm.toBillWatchPage = toBillWatchPage;
		privacyVm.toPrivacyPage   = toPrivacyPage;
		privacyVm.toTermsPage     = toTermsPage;
		privacyVm.initUser        = initUser;
		$scope.user           = initUser;

		console.log(initUser);

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
	})

})();