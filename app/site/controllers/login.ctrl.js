(function(){
	angular
		.module('ccApp')
		.controller('LoginCtrl', LoginCtrl);

		function LoginCtrl($http){
			var loginVm = this;

			loginVm.login = login;	
			function login(){
				var credentials = {
					email:    loginVm.email,
					password: loginVm.password    
				}

				credentials = JSON.stringify(credentials)
				$http.post('/login', credentials);
			}
		}
})();