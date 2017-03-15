(function(){

	angular
		.module('ccApp', ['ngRoute','angular-jwt', 'ngMessages', 'ngSanitize']);

	angular
		.module('ccApp')
		.config(function($routeProvider, $httpProvider){
			$routeProvider
				.when('/home', {
					templateUrl: "site/partials/main.html",
					controller: "MainCtrl as ctrl",
					resolve: {
							initUser: function(authSrv){
							return authSrv.initUser();
						}
					}
				})
				.when('/billWatch', {
					templateUrl: 'site/partials/billWatch.html',
					controller: "BillWatchCtrl as ctrl",
					resolve: {

						billComments: function(commentSrv){
							return commentSrv.initBillComments();
						},
						bills: 		  function(billSrv){

							// TODO#1: Don't allow the function to run twice
							// /////////////////////////////////////////////
							// var bills = billSrv.getBills();
							// billSrv.getBills().then(function(data){
							// 	console.log(data.length);

							// 	if (data.length == 0){
							// 		console.log('zero');
							// 		billSrv.initBills();
							// 	}
							// })
							// 	.then(function(){
							// 		console.log('getting Bills');
							// 		return billSrv.getBills();
							// 	});
							billSrv.initBills();
							return billSrv.getBills();

						},
						initUser:    function(authSrv){
							return authSrv.initUser();
						}
					}
				})
				.when('/about', {
					templateUrl: 'site/partials/about.html',
					controller: "AboutCtrl as ctrl",
					resolve: {
							initUser: function(authSrv){
							return authSrv.initUser();
						}
					}
				})
				.when('/privacy', {
					templateUrl: 'site/partials/privacy.html',
					controller: "PrivacyCtrl as ctrl",
					resolve: {
							initUser: function(authSrv){
							return authSrv.initUser();
						}
					}
				})
				.when('/terms', {
					templateUrl: 'site/partials/terms.html',
					controller: "TermsCtrl as ctrl",
					resolve: {
							initUser: function(authSrv){
							return authSrv.initUser();
						}
					}
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
						$('.processing').show();
						if (localStorage.auth_token != undefined){
							// $window.username= jwtHelper.decodeToken(localStorage.auth_token);
							// console.log(this.username);
							config.headers.authentication = localStorage.auth_token;
						}
						return config;
					},
					response: function(response){
						var auth_token = response.headers('authentication');
						$(".processing").hide();
						if (auth_token){
							var decrypt_token = jwtHelper.decodeToken(auth_token);
							console.log(decrypt_token.email);
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