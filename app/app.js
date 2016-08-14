(function(){

	angular
		.module('ccApp', ['ngRoute']);

	angular
		.module('ccApp')
		.config(function($routeProvider){
			$routeProvider
				.when('/home', {
					templateUrl: 'main.html',
					controller: "MainCtrl as ctrl"
				})
				.when('/billWatch', {
					templateUrl: 'billWatch.html',
					controller: "BillWatchCtrl as ctrl"
				})
				.when('/about', {
					templateUrl: 'about.html',
					controller: "AboutCtrl as ctrl"
				})
				.when('/privacy', {
					templateUrl: 'privacy.html',
					controller: "PrivacyCtrl as ctrl"
				})
				.when('/terms', {
					templateUrl: 'terms.html',
					controller: "TermsCtrl as ctrl"
				});
		})
	
})();