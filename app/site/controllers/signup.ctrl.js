(function(){
	angular
		.module('ccApp')
		.controller('SignUpCtrl', SignUpCtrl );

	function SignUpCtrl ($location, apiSrv, authSrv){
		var signUpVm = this;
		signUpVm.signup  = signup;
		signUpVm.authSrv = authSrv;

		function signup(isValid){
			if(!isValid) return;
			
			var user = {
				name: 		  signUpVm.uname,
				newEmail: 	  signUpVm.newEmail,
				newPassword:  signUpVm.newPassword,
				password_two: signUpVm.password_two
			}
			console.log(user);
			signUpVm.authSrv.signUp(user, function(res){
				console.log(res.data);
				if(res.status == 200){
					$location.url('/home');
				} else{
					console.log('error');
				}

			});
			// $location.url('/home');
		}
	}
})();