angular.module('ccApp')
	.directive('myComment', function(){
		
		function link(scope,element,attrs){

			scope.updateComments = function(){
				// var commVals = scope.commentsArray;
				var comment = scope.userComm;
				var user    = scope.user;
				// angular.forEach(commVals, function(){
				// 	console.log(commVals);
				// });
				user = user.toLowerCase();
				var nameLetter = user.charAt(0);
				for (var i = 1; i<27 ; i++){
					//console.log(nameLetter);
					
					user_letter = {fileNumber:i, letter:String.fromCharCode(96+i)}
					//console.log(user_letter.letter);

					if(user_letter.letter == nameLetter){
						scope.picture = user_letter.fileNumber;
						//console.log('---------- match -----');
					}

					//console.log('---------------user-------------');
					//console.log(user_letter);
				}

				if(user == 'guest'){
					return;
				}else{

				//console.log(user);
				//console.log("<li>" +  "<img class='' alt='Citizens Of Canada Logo' src='assets/img/"+scope.picture+ ".png'> " + user + " | " + comment+ "</li>");
						element.prepend("<div class='new-comment'><div class='old-comment-picture'>" +  "<img class='' height='50px' width='50px' alt='Citizens Of Canada Logo' src='assets/img/"+scope.picture+ ".png'>" + "</div>" + "<div class='comment-user-name'>" + user + "</div>" + "<div class='user-comment'>" + "<p>" + comment+ "</p>" + "</div></div>");
				}
			}


		}
		return {
			restrict: 'EA',
			// scope: {
			// 	uComment: '=billComm'
			// },
			// template: '<ul><li>here</li></ul>',
			// raplace:  'true'
			link:link
		};
	})