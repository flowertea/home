var testimonials = {
	index: -1,
	length: 0,
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
	},{
		user: 'Rouyun Tan',
		message: 'Mariana Seoane is a being of love and compassion<br>During the free reading in which Mariana kindly blessed to many and myself, she tuned into my akashic records and gave me valuable information.<br>Mariana conveyed messages from Archangel Michael and Azrael to me too. She is familiar with processes and warmly encouraged me to do what I have to do.<br>Truly grateful to connect with her',
		date: '10/2/2015',
	},{
		user: 'Brigitta Rabold',
		message: 'Mariana I just want to thank you for sharing your wonderful gifts. Your very first skype reading was a truly magical experience for me today. Your childlike freshness and aliveness came right away through with a beautiful inner strength knowing. The knowing resonated very strong and I felt right away a spirit/soul connection to you.<br>Mariana\'s suggestions on how I can heal, work and evolve resonates and helps me along my path. My reading and healing with Mariana exceeded any expectations that I had. Mariana relayed messages from my soul about my past lives and gave me insight into my own being. I am in awe at how accurate Mariana is. Mariana also gave me invaluable tools to help me heal and evolve to attain my goals.<br>She has an amazing energy and spirit and I am honored to have had a reading / healing with her.<br>With love, light and gratitude',
		date: '10/2/2015',
	},{
		user: 'Dyana Tran',
		message: 'Thank you Mariana. You are truly a gifted person. You had me in tears!! I appreciate your time and energy and especially your advice and insights. Everything was accurate and spot on! I know you will help so many people with your gifts. Thank you again. Love and light!',
		date: '10/2/2015',
	},{
		user: 'Natacha Simpson',
		message: 'I cannot believe how accurate & in depth Mariana\'s reading was. If you have questions or issues that are up in the air right now you need to talk to her. You can put your fears to rest & feel confident about the future. Thank you for being such a blessing Mariana.',
		date: '10/1/2015',
	},{
		user: 'Alanna Davis',
		message: 'Mariana is absolutely amazing. She has a wonderful gift! Thank you for making my day',
		date: '10/1/2015',
	},{
		user: 'Kurt Laumann Guillén',
		message: 'Best of luck in this new way, you\'re gonna do great c:',
		date: '10/1/2015',
	},{
		user: 'Natacha Simpson',
		message: 'Congratulations on your new business! People need your services! :)',
		date: '9/30/2015',
	},{
		user: 'Phillip Deak',
		message: 'Mariana, is a gifted healer who has found her true calling in life. Her intuition is spot on. She has had a tremendous impact on my life, especially when it comes to my own Spiritual journey. Although we live hundreds of miles apart, I could feel her energy clear my Chakras, almost as thou she was right next to me. It was a profound experience. I highly recommend her to all those of need of some Divine intervention.',
		date: '9/30/2015',
	},{
		user: 'Roseline Tran',
		message: 'I don\'t even know where to start! OH MY GOD LOL. This girl is crazy talented and powerful! She has so many abilities as well as great wisdom. She\'s helped me so much in so many aspects. I have literally asked her like 100 questions over the span of 3 weeks about so many different things, and she\'s answered all of them and given great spiritual advice.<br>She might be young, but her wisdom is definitely not young and neither are her abilities.',
		date: '9/30/2015',
	},{
		user: 'Pamela Aaralyn',
		message: 'Welcome to your life path. I completely love and support you every step of the way and it has been an honor to work with you and facilitate you through to your purpose here on earth. I love you!',
		date: '9/30/2015',
	},{
		user: 'Anastasiya Smetanin',
		message: 'Thank you for all your help. Your reading really helped me dive deeper and explore the root of my problems. I really enjoyed learning about the integration process from you.',
		date: '9/30/2015',
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
	testimonials.length = testimonials.data.length;
	populate();
	$('#testimonial-display .total').html(testimonials.length);
	$('#more-test-btn').click(function(){
		$('#testimonial-display').fadeOut('fast', function(){
			populate();
			$('#testimonial-display').fadeIn('fast');
		});
	});
}());
