(function(){
	angular
		.module('ccApp')
		.controller('PrivacyCtrl', PrivacyCtrl);

	function PrivacyCtrl($location){
		var billWatchVm = this;

		billWatchVm.toTermsPage = toTermsPage;

		function toTermsPage(){
			$location.url('/terms');
		}


	}
})();