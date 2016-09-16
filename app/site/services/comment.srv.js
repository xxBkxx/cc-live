(function(){
	angular
		.module('ccApp')
		.service('commentSrv', CommentService);

		function CommentService(apiSrv){
			var self 			  = this;

			self.billComment 	  = billComment;
			self.initBillComments = initBillComments;

			function billComment(commentPkg){
				apiSrv.request('/billComment', {commentPkg}, 'POST' )
					.then(function(res){
						var userE = res.data;
						self.updatedUserName = userE;
						console.log(self.updatedUserName);
					})
			}

			function initBillComments(){
				return apiSrv.request('/initComments', {}, "GET")
				.then(function(res){
					return res.data;
				});
			}

		}
})();