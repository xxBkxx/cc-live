(function(){
	angular
		.module('ccApp')
		.controller('SignupFormCtrl', function SignupFormCtrl($http){

			var signupFormVm = this;

			signupFormVm.submit = submit;

			function submit(isValid, data){
				if (!isValid) return;
				console.log("here");
				//$htpp.post('/api/submit', data);
			}
		}) 

})();