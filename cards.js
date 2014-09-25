var cards = []
for (r=0; r < 52; r++) {
	cards[r] = r+1 ;
	$('body').append('<div id="' + (r+1) +'"></div>');
	$('#' + (r+1)).append('<img src="images/' + cards[r] + '.png">');
	$('#' + cards[r]).css({
			'z-index': 100 - r,
			'position': 'absolute',
			'top': 120 + ((Math.pow(r, 2) - (52 * r) + 676) / 5) + 'px',
			'left': 86 - (1.5 * r) + '%',
			'-webkit-filter': 'grayscale(15%)',
		})
};
function shuffle(cards) {
  var n = cards.length, t, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    t = cards[n];
    cards[n] = cards[i];
    cards[i] = t;
    $('#' + (n+1)).append('<img src="images/' + cards[n] + '.png">');
    $('#' + cards[n]).css({
			'z-index': 100 - n,
			'position': 'absolute',
			'top': '30%',
			'left': '45%',
			'-webkit-filter': 'grayscale(15%)',
		})
		$('#' + cards[n]).animate({
			'top': 120 + ((Math.pow(n, 2) - (52 * n) + 676) / 5) + 'px',
			'left': 86 - (1.5 * n) + '%',
		}, 3000)
		$("img").hover(function() {
			$(this).css({
				'width': '144px',
				'height': '192px', 
			});
		}, function() {
			$(this).css({
				'width': '72px',
				'height': '96px', 
			});
			$(this).parent()
		})
  }
  return cards;
}
$('body').append('<button id="start" value="Shuffle">SHUFFLE!</button>');
$('#start').css({
	'position': 'absolute',
	'width': '6%',
	'height': '3.5%',
	'z-index': 9999,
	'left': '47%',
	'top': '80%',
});
$('body').append('<button id="show" value="SHOW!">SHOW</button>');
$('#show').hide();
$('#show').css({
	'position': 'absolute',
	'width': '5%',
	'height': '3.3%',
	'z-index': 9999,
	'left': '48%',
	'top': '80%',
});
$('#start').on('click', function() {
	for(yay=1 ; yay < 53; yay++) {
		$('#' + yay).animate({
		'left': (45 - ((yay * 5) / 200)) + "%",
		'top': (28 + ((yay * 5) / 200)) + "%",
	}, 5000, function() {
		$('img').animate({
			'width': '144px',
			'height': '192px',
		}, 1000)
	}).delay(1000);
	};
	$('body').append('<section id="hand"><img src="images/hand1.png"></section>');
	$('#hand').hide();
	$('#hand').css({
		'position': 'absolute',
		'left': '40%',
		'top': '5%',
		'z-index': '9999999',
	});
	$('#hand').delay(5200).fadeIn(400);
	$('#hand').fadeOut(400, function() {
		$('#hand').remove
	});
	$('div:lt(' + (2 + Math.floor(Math.random() * 15)) + ')').animate({
		'left': '+=13%',
		'z-index': '-=20',
	}, 2500);	
	$('div:lt(' + Math.floor(30 + (Math.random() * 20)) + '):gt(' + Math.floor(17 + (Math.random() * 14)) + ')').animate({
		'left': '-=13%',
		'z-index': '+=20',
	}, 2500);
	$('div').delay(1000).animate({
		'left': '45%',
	}, 2000).delay(1000);
	$('#start').fadeOut(1000);
	$('#show').delay(8000).fadeIn(5000);
})
$('#show').on('click', function() {
	$('img').remove();
	shuffle(cards);
})
