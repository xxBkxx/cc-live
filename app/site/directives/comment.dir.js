angular
	.module('ccApp')
	.directive('commentDirective', BillCommentDirective);

	function BillCommentDirective(){
		return{
			restrict: 'EA',
			replace:  true,
			// scope: 	  false,
			transclude: true,
			link: console.log("billComment");
		}
	}