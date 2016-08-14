(function(){
	angular
		.module('ccApp')
		.controller('BillWatchCtrl', BillWatchCtrl);

	function BillWatchCtrl($location){
		var billWatchVm = this;

		billWatchVm.toPrivacyPage = toPrivacyPage;

		function toPrivacyPage(){
			$location.url('/privacy');
		}


	}
})();