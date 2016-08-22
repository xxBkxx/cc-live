(function(){
	angular
		.module('ccApp')
		.controller('SignUpCtrl', SignUpCtrl );

	function SignUpCtrl ($location, $http){
		var signUpVm = this;

		signUpVm.login = login;
		signUpVm.signup = signup;

		function login(){
			var credentials = {
				username: signUpVm.username,
				password: signUpVm.password    
			}
			credentials = JSON.stringify(credentials)
			$http.post('/login', credentials);
			console.log(credentials);
		}
		function signup(){
			var user = {
				name: signUpVm.name,
				email: signUpVm.email,
				newPassword: signUpVm.newPassword,
				password_two: signUpVm.password_two
			}
			console.log(user);
			$http.post('/signup', user);
		}
	}
})();