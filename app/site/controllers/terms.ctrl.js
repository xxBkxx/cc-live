(function(){
	angular
		.module('ccApp')
		.controller('TermsCtrl', TermsCtrl);

	function TermsCtrl($scope, $location, initUser, authSrv){
		var termsVm = this;

		termsVm.authSrv			= authSrv;
		termsVm.signOut			= signOut;
		termsVm.toMainPage      = toMainPage;
		termsVm.toAboutPage     = toAboutPage;
		termsVm.toBillWatchPage = toBillWatchPage;
		termsVm.toPrivacyPage   = toPrivacyPage;
		termsVm.toTermsPage     = toTermsPage;
		termsVm.initUser        = initUser;
		$scope.user 			= initUser;

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
			termsVm.authSrv.signOut();
		}
	}
})();