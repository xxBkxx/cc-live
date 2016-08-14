(function(){
	angular
		.module('ccApp')
		.controller('AboutCtrl', AboutCtrl);

	function AboutCtrl($location){
		var aboutVm = this;

		aboutVm.toBillWatchPage = toBillWatchPage;

		function toBillWatchPage(){
			$location.url('/billWatch');
		}


	}
})();