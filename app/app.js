(function(){

	angular
		.module('ccApp', ['ngRoute','angular-jwt', 'ngMessages', 'ngSanitize'])
		.constant("AUTH_EVENTS", {

			loginSuccess: 'login-success',
			loginFail:    'login-fail'
		})

	angular
		.module('ccApp')
		.run(function($rootScope, AUTH_EVENTS, $location){
			console.log('run');

			$rootScope.$on(AUTH_EVENTS.loginFail, function(event, next){
				$('.processing').hide();
			});

			$rootScope.$on(AUTH_EVENTS.loginSuccess, function(event,nect){
				$location.url('/main');
			});


		})

	angular
		.module('ccApp')
		.config(function($routeProvider, $httpProvider, $locationProvider){
			$routeProvider
				.when('/home', {
					templateUrl: "site/partials/main.html",
					controller: "MainCtrl as ctrl",
					resolve: {
						initUser: function(authSrv,$location){
							// console.log(authSrv.initUser());
							userName = authSrv.initUser();
							if(userName == undefined
								|| userName == ''){

								userName = "guest";
								// window.alert('please signup or login');

								// $location.url('/signup');
							}

							return userName;
						},


						user:  function($location){
							if (localStorage.auth_token == ''
								|| localStorage == undefined){
								window.alert("please login");
								$lcation('login');
							}
						}


					}
				})
				.when('/billWatch', {
					templateUrl: 'site/partials/billWatch.html',
					controller: "BillWatchCtrl as ctrl",
					resolve: {

						// loggedin: function(authSrv){
						// 	userName = authSrv.initUser();
						// 	if(userName == undefined
						// 		|| userName == ''){
						// 	$('.vote-unordered-list').remove();
						// 		// window.alert('please signup or login');

						// 		// $location.url('/signup');
						// 	}
						// },

						billComments: function(commentSrv){
							return commentSrv.initBillComments();
						},
						bills: 		  function(billSrv){

							// TODO#1: Don't allow the function to run twice
							// /////////////////////////////////////////////
							var bills = billSrv.getBills();
							billSrv.getBills().then(function(data){
								console.log(data.length);

								if (data.length == 0){
									console.log('zero');
									billSrv.initBills();
								}
							})
								.then(function(){
									console.log('getting Bills');
									return billSrv.getBills();
								});
							billSrv.initBills();
							return billSrv.getBills();

						},
						initUser: function(authSrv){
							// console.log(authSrv.initUser());
							userName = authSrv.initUser();
							if(userName == undefined
								|| userName == ''){
								userName = "guest";
							// $('.vote-up').css('visibility', 'hidden');
								// window.alert('please signup or login');

								// $location.url('/signup');
							}

							return userName;
						},
						initVotes: function(voteSrv){
							return voteSrv.initVotes()
						}

					}
				})
				.when('/about', {
					templateUrl: 'site/partials/about.html',
					controller: "AboutCtrl as ctrl",
					resolve: {
						initUser: function(authSrv,$location){
							console.log(authSrv.initUser());
							userName = authSrv.initUser();
							if(userName == undefined
								|| userName == ''){

								userName = "guest";
								// window.alert('please signup or login');
								$('.vote-up').css('visibility', 'hidden ');
								$('.icon').css('visibility', 'visible');
								// $location.url('/signup');
							}

							return userName;
						}
					}
				})
				.when('/privacy', {
					templateUrl: 'site/partials/privacy.html',
					controller: "PrivacyCtrl as ctrl",
					resolve: {
						initUser: function(authSrv,$location){
							// console.log(authSrv.initUser());
							userName = authSrv.initUser();
							if(userName == undefined
								|| userName == ''){

								userName = "guest";
								// window.alert('please signup or login');

								// $location.url('/signup');
							}

							return userName;
						}
					}
				})
				.when('/terms', {
					templateUrl: 'site/partials/terms.html',
					controller: "TermsCtrl as ctrl",
					resolve: {
						initUser: function(authSrv,$location){
							console.log(authSrv.initUser());
							userName = authSrv.initUser();
							if(userName == undefined
								|| userName == ''){

								userName = "guest";
								// window.alert('please signup or login');

								// $location.url('/signup');
							}

							return userName;
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
				.when('/initVotes', {
					templateUrl: 'site/partials/billWatch.html',

				})
				.when('/vote', {
					templateUrl: 'site/partials/billWatch.html',
					// resolve: { 
					// 	initVotes: function (authSrv, $location){
					// 		userName = authSrv.initUser();
					// 		if(userName == undefined || username == '' || userName == 'guest'){
					// 			$('.vote-up').css('visibility', 'hidden');
					// 			alert('please log in to vote');
					// 		}
					// 	}
					// }
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

			// $locationProvider.html5Mode(true);
			// $locationProvider.hashPrefix = '!';

			$httpProvider.interceptors.push(function($q,jwtHelper){
				return {
					request: function(config){
						$('.processing').show();
						if (localStorage.auth_token != undefined){
							// $window.username= jwtHelper.decodeToken(localStorage.auth_token);
							// console.log(this.username);
							config.headers.authentication = localStorage.auth_token;
						}
						// console.log(config);
						return config;
					},
					response: function(response){
						$('.processing').hide();
						var deferred = $q.defer();
						var promise  = deferred.promise;
						var auth_token = response.headers('authentication');
						if (auth_token){
							var decrypt_token = jwtHelper.decodeToken(auth_token);
							if (decrypt_token.email){
								localStorage.auth_token = auth_token;
							}
						}
						// console.log(response.data);
						
 
						if(response.status == 200 && response.data.length == 153 || response.data.yea
								|| response.data.comment ){$('.processing').hide();}
					 	// setTimeout(function(){
						// 	$('.processing').hide();

						// })
							// promise.
							// 	then(function(response){
							// 		console.log('then');
							// 		$('.processing').hide();								
							// 	}, function(response){
							// 		console.log('then');
							// 		$('.processing').hide();	
							// 	})
							// 	.catch(function(err){
							// 		console.log(err);
							// 		$('.processing').hide();
							// 	})
							// 	.finally(function(response){
							// 		console.log('finally')
							// 		$('.processing').hide();
							// 	}, function(){console.log(done);})
						return response;
					}
				}
			})
		});
	
})();