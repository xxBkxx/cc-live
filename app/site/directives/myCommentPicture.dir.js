angular.module('ccApp')
	.directive('myCommentPicture', function(){

		function link(scope,element,attrs){

				// var commVals = scope.commentsArray;
				var comment = scope.userComm;
				var user    = scope.user;
				// angular.forEach(commVals, function(){
				// 	console.log(commVals);
				// });
				
				user = user.toLowerCase();
				var first_username_letter = user.charAt(0);
				var numberLetter = {};
				for (var i= 0; i<27; i++){
					numberLetter = {fileNumer:i, letter:String.fromCharCode(96+i)};
					if (first_username_letter == numberLetter.letter){
						scope.picture = numberLetter.fileNumer;
					}
				}
				// TODO: # (∞) Make a template handle this
				element.prepend("<img class='' height='50' width='50' alt='Citizens Of Canada Logo' src='assets/img/"+scope.picture+ ".png'> ");
		}
		return {
			restrict: 'EA',
			// scope: {
			// 	uComment: '=billComm'
			// },
			// template: "<li>" +  "<img class='' size='16×16px' alt='Citizens Of Canada Logo' src='assets/img/"+scope.picture+ ".png'> " + " | " + comment+ "</li>",
			// raplace:  'true',
			link:link
		};
	})