// angular

function viewCtrl($scope) {
	$scope.services = services;
	$scope.drawings = drawingsDB.drawings;

	$scope.refresh = function() {
		window.setTimeout(function(){
			initBacklight();
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

var formShowing = false;

function postBooking(data, callback){
	$.ajax({
       type: "POST",
       url: "https://sheetsu.com/apis/97c61c43",
       data: data })
    .done(function(res) {
		callback();
	})
	.fail(function(res) {
		alert("Service Error. Please contact me by email or Skype for your booking.");
	});
}

$(function(){
	$('#side-menu').hide();
	populateBG();
	populateCache();

	//slide btn
	$('.menu-slide-btn').each(function(){
		$(this).click(function(){
			var top = $('a[name="'+$(this).data('id')+'"]').position().top - $('#side-menu').height();
			$("html, body").animate({ scrollTop: top+"px" }, 300);
		});
	});

	// form
	$('.book-toggle-btn').each(function(){
		$(this).click(function(){
			$("html, body").animate({ scrollTop: "0px" }, 300, function(){
				if(!formShowing){
					formShowing = true;
					$('#form-hide').fadeOut('fast', function(){
						$('#bookingForm-display').fadeIn('fast');
					});
				}
			});
		})
	});
	$('#cancel-book-btn').click(function(){
		if(formShowing){
			formShowing = false;
			$('#bookingForm-display').fadeOut('fast', function(){
				$('#form-hide').fadeIn('fast');
			});
		}
	});

	$('#bookingForm').submit(function(){
		$(this).attr('disabled','disabled');
		var data = $('#bookingForm').serialize();
		console.log(data);
		postBooking(data, function(){
			$('#bookingForm-display').fadeOut('fast', function(){
				$("#success-message").fadeIn('fast');
				$('#send-book-btn').removeAttr('disabled');
				window.setTimeout(function(){
					$("#success-message").fadeOut('fast', function(){
						$('#form-hide').fadeIn('fast');
						formShowing = false;
					});
				}, 1500);
			});
		});
	});
}());
