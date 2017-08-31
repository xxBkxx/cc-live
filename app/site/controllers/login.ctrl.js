(function(){
	angular
		.module('ccApp')
		.controller('LoginCtrl', LoginCtrl);

		function LoginCtrl(apiSrv, $location, authSrv, $rootScope, AUTH_EVENTS){
			var loginVm = this;

			loginVm.login           = login;
			loginVm.toAboutPage     = toAboutPage;
			loginVm.toBillWatchPage = toBillWatchPage;
			loginVm.toPrivacyPage   = toPrivacyPage;
			loginVm.toTermsPage     = toTermsPage;
			loginVm.toSignupPage    = toSignupPage;
			loginVm.toHomePage		= toHomePage;

			function login(){

			// console.log(loginVm.email);
			// console.log(loginVm.password);

				var credentials = {
					email:    loginVm.email,
					password: loginVm.password    
				}
				authSrv.login(credentials).then(function(res)   {
					
					$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
					console.log(res);


					// if (res.status == 200){
					// 	$location.url('/home');
					// } else {
					// 	console.log('error');
					// }
				}, function(){

					$rootScope.$broadcast(AUTH_EVENTS.loginFail)
					console.log("fail");
				});
				// credentials = JSON.stringify(credentials)
				// apiSrv.request("/login", credentials, "POST");

				// $location.url('/home');

			}

			function toAboutPage(){
				$location.url('/about');
			}

			function toBillWatchPage(){
				$location.url('/billWatch');
			}

			function toTermsPage(){
				$location.url('/terms');
			}

			function toPrivacyPage(){
				$location.url('/privacy');
			}

			function toSignupPage(){
				$location.url('/signup');
			}

			function toHomePage(){
				$location.url('/home');
			}

		}
})();