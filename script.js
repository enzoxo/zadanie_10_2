/*var span = $('span');
	span.each(function (index, element) {
		if (index % 2 == 0) {
			$(element).css('color', 'red');
		}
	})
*/
$('span:odd').css('color', 'red');
//JQuery is going form the bottom to up so I used 'odd' cause we read 
//up to bottom.



var paragraphs = $('p');
paragraphs.each(function(index, element) {
	var button = '<button class="btn btn-primary" data-tmp="' + index + '">Click me</button'
	$(element).append(button);
}); 

$('button').click(function(){
	alert($(this).attr('data-tmp'));
});