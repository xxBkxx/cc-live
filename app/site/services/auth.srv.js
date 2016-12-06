(function(){
	angular
		.module('ccApp')
		.service('authSrv', AuthenticationService);

		function AuthenticationService(apiSrv, jwtHelper){
			var self = this;

			self.login    = login;
			self.initUser = initUser;

			function login(credentials, callback){
				apiSrv.request("/login", credentials, "POST")
					.then (function(res){
						callback(res);
						return res;
					});
			}
			function initUser(){
				var token = localStorage.auth_token;
				var decrypt_token = jwtHelper.decodeToken(token);
				return decrypt_token.name;
			}
		}
	
})();