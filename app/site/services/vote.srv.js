(function(){
	angular
		.module('ccApp')
		.service('voteSrv', VoteService);

		function VoteService(apiSrv){

			var self = this;

			self.initVotes = initVotes;

			function initVotes(){
				return apiSrv.request('/initVotes', {}, "GET")
				.then(function(res){
					return res.data;
				});
			}
		}


})();