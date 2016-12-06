angular
	.module('ccApp')
    .filter('reverseComments', function(){

		return function(items){
			return items.slice().reverse();

		};
	});