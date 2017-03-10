(function(){
	angular
		.module('ccApp')
		.service('authSrv', AuthenticationService);

		function AuthenticationService(apiSrv, jwtHelper, $location){
			var self = this;

			self.login    = login;
			self.initUser = initUser;
			self.signOut  = signOut;
			self.signUp   = signUp;

			function signUp(userInfo, callback){
				apiSrv.request("/signup", userInfo, "POST")
					.then(function(res){
						callback(res);
						console.log(res);
						// $location.url('/home'); 
						return res;
					});
			}

			function login(credentials, callback){
				apiSrv.request("/login", credentials, "POST")
					.then (function(res){
						callback(res);
						return res;
					});
			}
			function initUser(){
				// if (localStorage.)
				var token = localStorage.auth_token;
				console.log('token');
				console.log(token);
				var decrypt_token = jwtHelper.decodeToken(token);
				return decrypt_token.name;
			}

			function signOut(){
				localStorage.removeItem("auth_token");
				$location.url('/login');
			}
		}
	
})();