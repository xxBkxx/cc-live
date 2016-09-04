(function(){
	angular
		.module('ccApp')
		.service("billSrv", BillService);

		function BillService(apiSrv){

			var self = this;

			self.updatedBill = {};
			self.getBills = getBills;
			self.vote 	  = vote;
			self.updateBillVote = updateBillVote;
			self.initBills = initBills;

			function getBills(){
				return apiSrv.request('/billWatch', {}, 'GET')
					.then(function(res){
						console.log(res.data);
						return res.data;
					});// }, function(res){
					// 	console.log(res);
					// 	return console.log('it returning nothing');
					// })
			}
			function initBills(){
				return apiSrv.request('/init',{}, "GET")
					.then(function(res){
						console.log(res);
						return res;
					})
			}

			function vote(vote){
				// console.log(vote);
				 apiSrv.request('/vote', {vote}, 'POST')
					.then(function(res){
						self.updatedBill = res.data.yea;
						console.log(self.updatedBill);
					})
			}

			function updateBillVote(){
				// console.log(self.updatedBill);
				return self.updatedBill
			}
		}
})();