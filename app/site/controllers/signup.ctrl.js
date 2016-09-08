(function(){
	angular
		.module('ccApp')
		.controller('SignUpCtrl', SignUpCtrl );

	function SignUpCtrl ($location, apiSrv){
		var signUpVm = this;


		signUpVm.signup = signup;

		function signup(){

			var user = {
				name: 		  signUpVm.name,
				newEmail: 	  signUpVm.newEmail,
				newPassword:  signUpVm.newPassword,
				password_two: signUpVm.password_two
			}
			console.log(user);
			apiSrv.request("/signup", user, "POST");
		}
	}
})();