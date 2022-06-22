let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
let suitType;

randomize = () => {
	suitType = Math.floor(Math.random() * 4);
  let suitResult = suits[suitType];
	console.log(suitResult);
}

let cardAmount = ($('.card').length) + 1;

for (i = 1; i < cardAmount; i++) {
	var randomRot = -43 + Math.ceil(Math.random() * 3);
	var card = document.querySelector(`.card:nth-child(${i})`);
	card.style.transform = `rotateX(60deg) rotateY(0deg) rotateZ(${randomRot}deg) translateZ(${i*3}px)`;
}

$('.card').click(function(){
	if ($(this).hasClass('down1')) {
		$(this).removeClass('down1');
		$(this).addClass('opened1');
		randomize();
	} else if ($(this).hasClass('opened1')) {
		$(this).addClass('is-removed');
	} 

	else if ($(this).hasClass('down2')) {
		$(this).removeClass('down2');
		$(this).addClass('opened2');
		randomize();
	}
	else if ($(this).hasClass('opened2')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down3')) {
		$(this).removeClass('down3');
		$(this).addClass('opened3');
		randomize();
	}
	else if ($(this).hasClass('opened3')) {
		$(this).addClass('is-removed');
	}


	else if ($(this).hasClass('down4')) {
		$(this).removeClass('down4');
		$(this).addClass('opened4');
		randomize();
	}
	else if ($(this).hasClass('opened4')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down5')) {
		$(this).removeClass('down5');
		$(this).addClass('opened5');
		randomize();
	}
	else if ($(this).hasClass('opened5')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down6')) {
		$(this).removeClass('down6');
		$(this).addClass('opened6');
		randomize();
	}
	else if ($(this).hasClass('opened6')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down7')) {
		$(this).removeClass('down7');
		$(this).addClass('opened7');
		randomize();
	}
	else if ($(this).hasClass('opened7')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down8')) {
		$(this).removeClass('down8');
		$(this).addClass('opened8');
		randomize();
	}
	else if ($(this).hasClass('opened8')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down9')) {
		$(this).removeClass('down9');
		$(this).addClass('opened9');
		randomize();
	}
	else if ($(this).hasClass('opened9')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down10')) {
		$(this).removeClass('down10');
		$(this).addClass('opened10');
		randomize();
	}
	else if ($(this).hasClass('opened10')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down11')) {
		$(this).removeClass('down11');
		$(this).addClass('opened11');
		randomize();
	}
	else if ($(this).hasClass('opened11')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down12')) {
		$(this).removeClass('down12');
		$(this).addClass('opened12');
		randomize();
	}
	else if ($(this).hasClass('opened12')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down13')) {
		$(this).removeClass('down13');
		$(this).addClass('opened13');
		randomize();
	}
	else if ($(this).hasClass('opened13')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down14')) {
		$(this).removeClass('down14');
		$(this).addClass('opened14');
		randomize();
	}
	else if ($(this).hasClass('opened14')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down15')) {
		$(this).removeClass('down15');
		$(this).addClass('opened15');
		randomize();
	}
	else if ($(this).hasClass('opened15')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down16')) {
		$(this).removeClass('down16');
		$(this).addClass('opened16');
		randomize();
	}
	else if ($(this).hasClass('opened16')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down17')) {
		$(this).removeClass('down17');
		$(this).addClass('opened17');
		randomize();
	}
	else if ($(this).hasClass('opened17')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down18')) {
		$(this).removeClass('down18');
		$(this).addClass('opened18');
		randomize();
	}
	else if ($(this).hasClass('opened18')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down19')) {
		$(this).removeClass('down19');
		$(this).addClass('opened19');
		randomize();
	}
	else if ($(this).hasClass('opened19')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down20')) {
		$(this).removeClass('down20');
		$(this).addClass('opened20');
		randomize();
	}
	else if ($(this).hasClass('opened20')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down21')) {
		$(this).removeClass('down21');
		$(this).addClass('opened21');
		randomize();
	}
	else if ($(this).hasClass('opened21')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down22')) {
		$(this).removeClass('down22');
		$(this).addClass('opened22');
		randomize();
	}
	else if ($(this).hasClass('opened22')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down23')) {
		$(this).removeClass('down23');
		$(this).addClass('opened23');
		randomize();
	}
	else if ($(this).hasClass('opened23')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down24')) {
		$(this).removeClass('down24');
		$(this).addClass('opened24');
		randomize();
	}
	else if ($(this).hasClass('opened24')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down25')) {
		$(this).removeClass('down25');
		$(this).addClass('opened25');
		randomize();
	}
	else if ($(this).hasClass('opened25')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down26')) {
		$(this).removeClass('down26');
		$(this).addClass('opened26');
		randomize();
	}
	else if ($(this).hasClass('opened26')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down27')) {
		$(this).removeClass('down27');
		$(this).addClass('opened27');
		randomize();
	}
	else if ($(this).hasClass('opened27')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down28')) {
		$(this).removeClass('down28');
		$(this).addClass('opened28');
		randomize();
	}
	else if ($(this).hasClass('opened28')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down29')) {
		$(this).removeClass('down29');
		$(this).addClass('opened29');
		randomize();
	}
	else if ($(this).hasClass('opened29')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down30')) {
		$(this).removeClass('down30');
		$(this).addClass('opened30');
		randomize();
	}
	else if ($(this).hasClass('opened30')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down31')) {
		$(this).removeClass('down31');
		$(this).addClass('opened31');
		randomize();
	}
	else if ($(this).hasClass('opened31')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down32')) {
		$(this).removeClass('down32');
		$(this).addClass('opened32');
		randomize();
	}
	else if ($(this).hasClass('opened32')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down33')) {
		$(this).removeClass('down33');
		$(this).addClass('opened33');
		randomize();
	}
	else if ($(this).hasClass('opened33')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down34')) {
		$(this).removeClass('down34');
		$(this).addClass('opened34');
		randomize();
	}
	else if ($(this).hasClass('opened34')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down35')) {
		$(this).removeClass('down35');
		$(this).addClass('opened35');
		randomize();
	}
	else if ($(this).hasClass('opened35')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down36')) {
		$(this).removeClass('down36');
		$(this).addClass('opened36');
		randomize();
	}
	else if ($(this).hasClass('opened36')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down37')) {
		$(this).removeClass('down37');
		$(this).addClass('opened37');
		randomize();
	}
	else if ($(this).hasClass('opened37')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down38')) {
		$(this).removeClass('down38');
		$(this).addClass('opened38');
		randomize();
	}
	else if ($(this).hasClass('opened38')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down39')) {
		$(this).removeClass('down39');
		$(this).addClass('opened39');
		randomize();
	}
	else if ($(this).hasClass('opened39')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down40')) {
		$(this).removeClass('down40');
		$(this).addClass('opened40');
		randomize();
	}
	else if ($(this).hasClass('opened40')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down41')) {
		$(this).removeClass('down41');
		$(this).addClass('opened41');
		randomize();
	}
	else if ($(this).hasClass('opened41')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down42')) {
		$(this).removeClass('down42');
		$(this).addClass('opened42');
		randomize();
	}
	else if ($(this).hasClass('opened42')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down43')) {
		$(this).removeClass('down43');
		$(this).addClass('opened43');
		randomize();
	}
	else if ($(this).hasClass('opened43')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down44')) {
		$(this).removeClass('down44');
		$(this).addClass('opened44');
		randomize();
	}
	else if ($(this).hasClass('opened44')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down45')) {
		$(this).removeClass('down45');
		$(this).addClass('opened45');
		randomize();
	}
	else if ($(this).hasClass('opened45')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down46')) {
		$(this).removeClass('down46');
		$(this).addClass('opened46');
		randomize();
	}
	else if ($(this).hasClass('opened46')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down47')) {
		$(this).removeClass('down47');
		$(this).addClass('opened47');
		randomize();
	}
	else if ($(this).hasClass('opened47')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down48')) {
		$(this).removeClass('down48');
		$(this).addClass('opened48');
		randomize();
	}
	else if ($(this).hasClass('opened48')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down49')) {
		$(this).removeClass('down49');
		$(this).addClass('opened49');
		randomize();
	}
	else if ($(this).hasClass('opened49')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down50')) {
		$(this).removeClass('down50');
		$(this).addClass('opened50');
		randomize();
	}
	else if ($(this).hasClass('opened50')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down51')) {
		$(this).removeClass('down51');
		$(this).addClass('opened51');
		randomize();
	}
	else if ($(this).hasClass('opened51')) {
		$(this).addClass('is-removed');
	}

	else if ($(this).hasClass('down52')) {
		$(this).removeClass('down52');
		$(this).addClass('opened52');
		randomize();
	}
	else if ($(this).hasClass('opened52')) {
		$(this).addClass('is-removed');
	}

});

