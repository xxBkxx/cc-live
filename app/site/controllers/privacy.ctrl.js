(function(){
	angular
		.module('ccApp')
		.controller('PrivacyCtrl', function PrivacyCtrl($scope, $location, initUser, authSrv){
		
		var privacyVm = this;

		privacyVm.toMainPage      = toMainPage;
		privacyVm.toAboutPage     = toAboutPage;
		privacyVm.toBillWatchPage = toBillWatchPage;
		privacyVm.toPrivacyPage   = toPrivacyPage;
		privacyVm.toTermsPage     = toTermsPage;
		privacyVm.initUser        = initUser;
		privacyVm.authSrv		  = authSrv;
		privacyVm.signOut		  = signOut;
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

		function signOut(){
			privacyVm.authSrv.signOut();
		}
	})

})();