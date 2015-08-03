function populateShareButtonLink(btnId)
{
	var id = '#'+btnId;
	var link = $(id).data('href');
	console.log($(id));
	link = link.replace('<URL>', window.location.href);
	link = link.replace('<IMG>', $(id).data('img'));
	$(id).attr('href', link)
}

function populateShareButtonLinks(btnIds)
{
	for (var i in btnIds)
	{
		populateShareButtonLink(btnIds[i]);
	}
}

$('.share-btn').each(function(){
	$(this).hover(function(){
		$(this).css('background-color', $(this).data('color'));
	}, function(){
		$(this).css('background-color', '#efefef');
	});
})

populateShareButtonLinks(btns);
