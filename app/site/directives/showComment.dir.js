angular.module('ccApp')
	.directive('showComment', function(){

		function link(scope,element,attrs){

			scope.showComments = function(){
				console.log('showComment');
				console.log(element);
				// console.log(element[0].parentElement.nextSibling.nextElementSibling.hidden);
				// console.log(scope.pleaseShow);

				// if (element[0].parentElement.nextSibling.nextElementSibling.hidden = false){
				// 	return element[0].parentElement.nextSibling.nextElementSibling.hidden = true;
				// } else if (element[0].parentElement.nextSibling.nextElementSibling.hidden = true){
				// 	return element[0].parentElement.nextSibling.nextElementSibling.hidden = false;
				// }
				// scope.pleaseShow = false;
				if (scope.pleaseShow == false || scope.pleaseShow == undefined){
					return scope.pleaseShow = true;
				}
				else if (scope.pleaseShow == true){
					return scope.pleaseShow = false;
				}

			}
			
		}
		return {
			restrict: 'EA',
			scope: false,
			link:link
		};
	})