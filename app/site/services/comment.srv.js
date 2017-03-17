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
						self.comment = userE;
						console.log(self.comment.comment);
						return self.comment.comment;
					})
			}

			function userComment(){
				apiSrv.requrest('')
			}

			function initBillComments(){
				return apiSrv.request('/initComments', {}, "GET")
				.then(function(res){
					return res.data;
				});
			}

		}
})();