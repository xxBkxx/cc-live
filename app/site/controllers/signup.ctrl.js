(function(){
	angular
		.module('ccApp')
		.controller('SignUpCtrl', SignUpCtrl );

	function SignUpCtrl ($location, apiSrv, authSrv){
		var signUpVm = this;

		signUpVm.signup  = signup;
		signUpVm.authSrv = authSrv;
		signUpVm.toLoginPage = toLoginPage;
		signUpVm.toAboutPage = toAboutPage;
		signUpVm.toBillWatchPage = toBillWatchPage;
		signUpVm.toPrivacyPage   = toPrivacyPage; 
		signUpVm.toTermsPage     = toTermsPage;


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

		function toLoginPage(){
			$location.url('/login');
		}
	}
})();