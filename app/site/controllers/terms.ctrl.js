(function(){
	angular
		.module('ccApp')
		.controller('TermsCtrl', TermsCtrl);

	function TermsCtrl($location){
		var termsVm = this;

		termsVm.toMainPage = toMainPage;

		function toMainPage(){
			$location.url('/home');
		}


	}
})();