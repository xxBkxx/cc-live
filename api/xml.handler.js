// $.ajax({
// 	url:'http://www.parl.gc.ca/legisinfo/Home.aspx?ParliamentSession=42-1&Language=E&Mode=1&download=xml?callback=?callMeBack', function callMeBack(res){
// 	console.log(res);
// } 

// 	// function callMeBack(res){
// 	// 	console.log(res);
// 	// },
// 		dataType:"jsonp",

// 	// success: function(xml){
// 	// 	console.log(xml);
// 	// }
// });



$.ajax({
	url:'download.xml',
	dataType:"xml",

	success: function(xml){
		xmlDoc = $.parseXML( xml ),
  		$xml = $( xmlDoc ),
		console.log(typeof $xml);
		console.log(xml);

		var bills = $(xml).find("Bills");


		// <Bill> with attrivutes
		// console.log(bills.children("Bill"));
		// console.log(bills.children("Bill")[0].attributes[0]);
		// console.log(bills.children("Bill")[1].attributes[1]);
		
		// console.log(bills.children("Bill").children("BillIntroducedDate").text());

		// // <BIll><Children>
		// console.log(bills.children("Bill").children("BillIntroducedDate"));

		bills.children("Bill").each(function(index, element){
			console.log($(element).children());
		});

		console.log(bills.children("Bill").children("BillIntroducedDate")[0].attributes[0]);
		console.log(bills.children("Bill").children("BillIntroducedDate")[1].attributes[1]);



		console.log(bills.children("Bill").children("ParliamentSession"));
		console.log(bills.children("Bill").children("ParliamentSession")[0].attributes[0]);
		console.log(bills.children("Bill").children("ParliamentSession")[1].attributes[1]);

		console.log(bills.children("Bill").children("BillNumber"));
		console.log(bills.children("Bill").children("BillNumber")[0].attributes[0]);
		console.log(bills.children("Bill").children("BillNumber")[1].attributes[1]);

		// console.log(bills.children("Bill").children("BillTitle"));
		// console.log(bills.children("Bill").children("BillTitle").children("Title").text());
		// console.log(bills.children("Bill").children("BillTitle").children("Title")[0].attributes[0]);

		// console.log(bills.children("Bill").children("ShortTitle"));
		// console.log(bills.children("Bill").children("ShortTitle").children("Title").text());
		// console.log(bills.children("Bill").children("ShortTitle").children("Title")[0].attributes[0]);

		// console.log(bills.children("Bill").children("BillType"));
		// console.log(bills.children("Bill").children("BillType").children("Title").text());
		// console.log(bills.children("Bill").children("BillType").children("Title")[0].attributes[0]);

		console.log(bills.children("Bill").children("SponsorAffiliation"));
		console.log(bills.children("Bill").children("SponsorAffiliation").children("Title"));
		console.log(bills.children("Bill").children("SponsorAffiliation").children("Person"));
		console.log(bills.children("Bill").children("SponsorAffiliation").children("Person")[0].attributes[0]);
		console.log(bills.children("Bill").children("SponsorAffiliation").children("Person")[1].attributes[1]);
		console.log(bills.children("Bill").children("SponsorAffiliation").children("Person").children("FullName"));		
		// console.log(bills.children("Bill").children("SponsorAffiliation").children("Title")[0].attributes[0]);

		console.log(bills.children("Bill").children("SponsorAffiliation").children("PoliticalParty"));
		console.log(bills.children("Bill").children("SponsorAffiliation").children("PoliticalParty").children("Title").text());
		console.log(bills.children("Bill").children("SponsorAffiliation").children("PoliticalParty").children("Title")[0].attributes[0]);

		console.log(bills.children("Bill").children("Publications"));
		console.log(bills.children("Bill").children("Events")[0].attributes[0]);
		




		// get bill id/lastUpdated
		// $(xml).find("Bill").each(function(){
		// 	$.each(this.attributes, function(i, atttrib){
		// 		console.log($(this).find("Bill"));
		// 		var name = atttrib.name;
		// 		var value = atttrib.value;
		// 	});
		// })
	}
});
	// header:
	// {
		// "Access-Control-Allow-Origin":"*",
		// "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
		// "Access-Control-Allow-Headers": "Content-Type, Content-Range, Content-Disposition, Content-Description"
	// },
// $.getJSON('http://www.parl.gc.ca/legisinfo/Home.aspx?ParliamentSession=42-1&Language=E&Mode=1&download=xml?callback=?callMeBack', function callMeBack(res){
// 	console.log(JSON.stringify(res));
// });

