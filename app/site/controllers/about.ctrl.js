(function(){
	angular
		.module('ccApp')
		.controller('AboutCtrl', AboutCtrl);

	function AboutCtrl($location, $scope, initUser){
		var aboutVm = this;
		
		aboutVm.toMainPage		= toMainPage;
		aboutVm.toBillWatchPage = toBillWatchPage;
		aboutVm.toPrivacyPage 	= toPrivacyPage;
		aboutVm.toTermsPage 	= toTermsPage;
		aboutVm.initUser        = initUser;
		aboutVm.signOut   	    = signOut;
		$scope.user 		= initUser;

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

		function signOut(){
			localStorage.removeItem("auth_token");
			console.log("here");
		}
	}
})();