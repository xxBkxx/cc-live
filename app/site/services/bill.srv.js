(function(){
	angular
		.module('ccApp')
		.service("billSrv", BillService);

		function BillService(apiSrv){

			var self = this;
			self.getBills = getBills;

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
				return api.request('/init',{}, "GET")
					.then(function(res){
						console.log(res);
						return res.data;
					})
			}
		}
})();