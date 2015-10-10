// angular

function viewCtrl($scope) {
	$scope.services = services;
	$scope.drawings = drawingsDB.drawings;

	$scope.refresh = function() {
		window.setTimeout(function(){
			initPortfolio();
		}, 500);
	};
}


// menu highligher
var cachePosition = {};
var currentSplash = ''

function populateBG(){
	$('.splash-div').each(function(i, e){
		var div = document.createElement('div');
		$(div).addClass('splash-bg');
		$(div).attr('id','bg-'+$(e).data('id'));
		$(div).css({
			'background-image':'url("'+$(e).data('image')+'")'
		});
		$(div).hide();
		$('#splash-bg-container').append(div);
		if (i == 0){
			currentSplash = $(div).attr('id');
			$(div).fadeIn('slow');
		}
	});
}

function populateCache(){
	var splashCount = $('.splash-div').length;
	$('.splash-div').each(function(i, e){
		var top = $(e).position().top-$(window).height()*0.312;
		cachePosition[$(e).data('id')] =
		{
			top:top,
			buttom: splashCount == i+1 ? $(document).height() + 1000 :
							$(e).height() + top,
		}

	});
}

function showMenu(top){
	var thr = $(window).height()*0.618;
	if(top > thr){
		$('#side-menu').slideDown('slow');
	}else if(top < thr){
		$('#side-menu').slideUp('slow');
	}
}

function refreashMenuHighlight(){
	for(var i in cachePosition){
		var top = $('#side-menu').offset().top;
		showMenu(top);
		if (top > cachePosition[i].top &&
			top < cachePosition[i].buttom){
				$('#'+i).addClass('active');
				if($('#bg-'+i).attr('id') != currentSplash){
					currentSplash = $('#bg-'+i).attr('id');
					$('#bg-'+i).fadeIn('slow');
				}
		}else{
			$('#'+i).removeClass('active');
			$('#bg-'+i).fadeOut('slow');
		}
	}
}

window.onscroll = function(){
	refreashMenuHighlight();
}

window.onresize = function(){
	populateCache();
	refreashMenuHighlight();
}

$(function(){
	$('#side-menu').hide();
	populateBG();
	populateCache();
}());