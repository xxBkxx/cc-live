(function(){
	angular
		.module('ccApp')
		.controller('LoginCtrl', LoginCtrl);

		function LoginCtrl(apiSrv, $location, authSrv, $rootScope){
			var loginVm = this;

			loginVm.login = login;


			function login(){

			// console.log(loginVm.email);
			// console.log(loginVm.password);

				var credentials = {
					email:    loginVm.email,
					password: loginVm.password    
				}
				authSrv.login(credentials, function(res){
					console.log(res);
					if (res.status == 200){
					} else {
						console.log('error');
					}
				});
				// credentials = JSON.stringify(credentials)
				// apiSrv.request("/login", credentials, "POST");

				// $location.url('/home');

			}
		}
})();