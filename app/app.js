(function(){

	angular
		.module('ccApp', ['ngRoute','angular-jwt']);

	angular
		.module('ccApp')
		.config(function($routeProvider, $httpProvider){
			$routeProvider
				.when('/home', {
					templateUrl: "site/partials/main.html",
					controller: "MainCtrl as ctrl"
				})
				.when('/billWatch', {
					templateUrl: 'site/partials/billWatch.html',
					controller: "BillWatchCtrl as ctrl",
					resolve: {
						billComments: function(billSrv){
							return billSrv.initBillComments();
						},
						bills: 		  function(billSrv) {
							billSrv.initBills();
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
				.when('/signup', {
					templateUrl: 'site/partials/signup.html',
					controller: 'SignUpCtrl as ctrl'
				})
				.when('/login', {
					templateUrl: 'site/partials/login.html',
					controller: 'LoginCtrl as ctrl'	
				})
				.when('/vote', {
					templateUrl: 'site/partials/billWatch.html'

				})
				.when('/billComment', {
					templateUrl: 'site/partials/billWatch.html'
				})
				.when('/initComments', {
					templateUrl: 'site/partials/billwatch.html'
				})
				.otherwise({ 
					redirectTo: '/home'
				});

			$httpProvider.interceptors.push(function(jwtHelper){
				return {
					request: function(config){
						if (localStorage.auth_token != undefined){
							console.log(config);
							config.headers.authentication = localStorage.auth_token;
						}
						return config;
					},
					response: function(response){
						var auth_token = response.headers('authentication');
						if (auth_token){
							var decrypt_token = jwtHelper.decodeToken(auth_token);
							if (decrypt_token.email){
								localStorage.auth_token = auth_token;
							}
						}
						return response;
					}
				}
			})
		});
	
})();