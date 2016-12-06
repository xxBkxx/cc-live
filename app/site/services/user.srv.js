(function(){
	angular
		.module('ccApp')
		.service('userSrv', UserService);

			function UserService(apiSrv){
				var self = this;

				self.userComment    = userComment;
				self. getCurrnetUser = getCurrnetUser;
			

			function userComment(){
				apiSrv.requrest('')
			}

			function getCurrnetUser(){
				// console.log('User');
				// return apiSrv.request('/getUsers', {}, 'GET')
				// .then (function(res){
				// 	console.log(res);
				// 	return res.data;
				// });
				//console.log(jwtHelper);
				// console.log($window.username);
			}



			function initUser(){
				return apiSrv.request('/initUser', {}, "GET")
				.then(function(res){
					return res.data;
				});
			}
		}

})();