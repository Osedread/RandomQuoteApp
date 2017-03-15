var $quoteBox = $('#quoteBox');
var $quoteBtn = $('#generateQuote');
var $tweetBtn = $('#tweetQuote');

$(document).ready(function () {
	
	// Link Event handler with Quote API
	$quoteBtn.on('click', function() {
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/',
			dataType: 'jsonp',
			data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
			success: function(response) {
				$quoteBox.hide();
				$quoteBox.empty();
				$quoteBox.append('<p>' + response.quoteText + '</p>');
				$quoteBox.append('<cite>- ' + response.quoteAuthor + '</cite>');
				$quoteBox.fadeIn();
				// Since we depend on the HREF attribute of the Twitter button to tweet the content through the line '../tweet?text=...' we need to introduce the content into the end of the HREF.
				$tweetBtn.attr('href', 'https://twitter.com/intent/tweet?text=' + response.quoteText + ' -' + response.quoteAuthor);
			}
		});
	});
	
	


});