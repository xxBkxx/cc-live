(function(){

	angular
		.module('ccApp', ['ngRoute']);

	angular
		.module('ccApp')
		.config(function($routeProvider){
			$routeProvider
				.when('/home', {
					templateUrl: "site/partials/main.html",
					controller: "MainCtrl as ctrl"
				})
				.when('/billWatch', {
					templateUrl: 'site/partials/billWatch.html',
					controller: "BillWatchCtrl as ctrl",
					resolve: {
						bills: function(billSrv) {
							return billSrv.getBills();
						}
					}
				})
				.when('/about', {
					templateUrl: 'site/partials/about.html',
					controller: "AboutCtrl as ctrl"
				})
				.when('/privacy', {
					templateUrl: 'site/partials/privacy.html',
					controller: "PrivacyCtrl as ctrl"
				})
				.when('/terms', {
					templateUrl: 'site/partials/terms.html',
					controller: "TermsCtrl as ctrl"
				})
				.when('/init', {
					resolve:{
						bills: function(billSrv){
							billSrv.initBills();
						}
					}
				})
				.when('/signup', {
					templateUrl: 'site/partials/signup.html',
					controller: 'SignUpCtrl as ctrl'
				})
				.when('/login', {
					templateUrl: 'site/partials/signup.html',
					controller: 'SignUpCrtl as ctrl'	
				})
				.otherwise({
					redirectTo: '/home'
				});
		});
	
})();