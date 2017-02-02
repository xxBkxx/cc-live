(function(){
	angular
		.module('ccApp')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl($location, $scope, initUser){
		var mainVm = this;

		mainVm.toMainPage      = toMainPage;
		mainVm.toAboutPage     = toAboutPage;
		mainVm.toBillWatchPage = toBillWatchPage;
		mainVm.toPrivacyPage   = toPrivacyPage;
		mainVm.toTermsPage     = toTermsPage;
		mainVm.initUser        = initUser;
		$scope.user            = initUser;


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