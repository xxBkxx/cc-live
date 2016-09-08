(function(){
	angular
		.module('ccApp')
		.controller('LoginCtrl', LoginCtrl);

		function LoginCtrl(apiSrv){
			var loginVm = this;

			loginVm.login = login;


			function login(){

			console.log(loginVm.email);
			console.log(loginVm.password);

				var credentials = {
					email:    loginVm.email,
					password: loginVm.password    
				}

				// credentials = JSON.stringify(credentials)
				apiSrv.request("/login", credentials, "POST");
			}
		}
})();