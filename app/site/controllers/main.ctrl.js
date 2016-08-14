(function(){
	angular
		.module('ccApp')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl($location){
		var mainVm = this;

		mainVm.toAboutPage = toAboutPage;

		function toAboutPage(){
			$location.url('/about');
		}


	}
})();