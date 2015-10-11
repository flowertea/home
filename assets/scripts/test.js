var testimonials = {
	index: -1,
	length: 3,
	data: [{
		user: 'Erin Aslan',
		message: 'I had an aura and soul origin reading with Mariana and I am very impressed by it. Mariana is a gifted psychic who answered my questions right away and channeled my guides directly. Finding out my roots gave me a clear understanding of my soul aspects and my aura reading confirmed my spiritual purpose and development. I believe having such a reading is a must for any spritual/non spiritual person who is looking for her direction in life. And I highly recommend Mariana for this reading, because she is a very kind, loving and gifted person with an absolutely professional attitute.',
		date: '10/10/2015',
	},{
		user: 'Sarah Spence',
		message: 'Mariana did a soul drawing for me. What a gorgeous and accurate depiction of the truth of who I am. Water and earth energies are strong for me, so I love all the green and blue she used. The orange also represents my love of beauty and feeling good. As I gaze at the drawing, I feel my energetic field align itself from the centre, from my heart. It feels comforting and powerful in my body. This is a perfect time for me to have something tangible to remind me of who I am, as I step into adulthood and decide how I would like to participate in this world. It reminds me of one of my favourite childhood movies, Thumbelina, the fairy born of a flower who does her best to fit into this world. Her message that accompanied the drawing was simple yet VERY potent for me, at this time. I look forward to watching her intuitive gifts grace this world.',
		date: '10/8/2015',
	},{
		user: 'Grandiose Messiahcomplex',
		message: 'I received a free reading from Mariana yesterday, I am blown away by her accuracy and the information that she knew that I gave her zero knowledge of. She is the real deal and I intend to and am happy to pay for future advice. Thank you again Mariana, I can\'t thank you enough.',
		date: '10/4/2015',
	}],

	rotate: function(){
		this.index = (this.index + 1) % this.length;
		return this.data[this.index];
	}
}

function populate(){
	var test = testimonials.rotate();
	$('#testimonial-display blockquote').html(test.message);
	$('#testimonial-display .author').html(test.user);
	$('#testimonial-display .time').html(test.date);
	$('#testimonial-display .current').html(testimonials.index+1);
}

$(function(){
	populate();
	$('#testimonial-display .total').html(testimonials.length);
	$('#more-test-btn').click(function(){
		$('#testimonial-display').fadeOut('fast', function(){
			populate();
			$('#testimonial-display').fadeIn('fast');
		});
	});
}());
