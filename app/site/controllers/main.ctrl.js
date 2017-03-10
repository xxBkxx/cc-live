(function(){
	angular
		.module('ccApp')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl($location, $scope, initUser, authSrv){
		var mainVm = this;

		mainVm.toMainPage      = toMainPage;
		mainVm.toAboutPage     = toAboutPage;
		mainVm.toBillWatchPage = toBillWatchPage;
		mainVm.toPrivacyPage   = toPrivacyPage;
		mainVm.toTermsPage     = toTermsPage;
		mainVm.authSrv		   = authSrv;
		mainVm.initUser        = initUser;
		$scope.user            = initUser;
		mainVm.signOut		   = signOut;

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

		function signOut(){
			mainVm.authSrv.signOut();
		}

	}
})();