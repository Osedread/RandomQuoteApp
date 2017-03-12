var $quoteBox = $('#quoteBox');



$(document).ready(function () {
	
	var $quoteBtn = $('#generateQuote');

	$quoteBtn.on('click', function() {
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/',
			dataType: 'jsonp',
			data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
			success: function(response) {
				$quoteBox.empty();
				$quoteBox.append('<p>' + response.quoteText + '</p>');
				$quoteBox.append('<cite>- ' + response.quoteAuthor + '</cite>');
			}
		});
	});



});