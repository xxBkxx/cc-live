(function(){
	angular
		.module('ccApp')
		.service("billSrv", BillService);

		function BillService(apiSrv){

			var self = this;

			self.updatedUserName = '';

			self.updatedBill 	= {};
			self.getBills 		= getBills;
			self.vote 	  		= vote;
			self.updateBillVote = updateBillVote;
			self.initBills 		= initBills;
			// self.billComment 	= billComment;
			self.updateCommentName = updateCommentName;
			// self.initBillComments  = initBillComments;

			function getBills(){
				return apiSrv.request('/billWatch', {}, 'GET')
					.then(function(res){
						// console.log(res.data);
						return res.data;
					});// }, function(res){
					// 	console.log(res);
					// 	return console.log('it returning nothing');
					// })
			}
			function initBills(){

				return apiSrv.request('/init',{}, "POST")
						.then(function(res){
							console.log(res.data);
							return res.data
					})
			}

			// function initBillComments(){
			// 	return apiSrv.request('/initComments', {}, "GET")
			// 	.then(function(res){
			// 		console.log(res.data);
			// 		return res.data;
			// 	});
			// }

			// function billComment(commentPkg){
			// 	apiSrv.request('/billComment', {commentPkg}, 'POST')
			// 		.then(function(res){
			// 			console.log(res);
			// 			var userE = res.data;
			// 			self.updatedUserName = userE;
			// 			console.log(self.updatedUserName);
			// 		})
			// }
			function vote(decision, vote){
				// console.log(vote);
				 apiSrv.request('/vote', {decision, vote}, 'POST')
					// .then(function(res){
					// 	self.updatedBill = res.data.yea;
					// 	// console.log(self.updatedBill);
					// })
			}

			function updateCommentName(){
				return self.updatedUserName;
			}

			function updateBillVote(){
				// console.log(self.updatedBill);
				return self.updatedBill
			}
		}
})();