$('document').ready(() => {
	initGrid();
	safeSet(4, 4, 0);
	safeSet(5, 5, 0);
	safeSet(4, 5, 1);
	safeSet(5, 4, 1);
	getAvailableMove(0);
	$('.is-1').click((e) => {
		// human player
		let html = e.target.innerHTML;
		let pos = getLocation(e.target.id);
		if (setContent(pos.x, pos.y, 0 % 2)) {
			removeAllFill();
			changeTile(pos.x, pos.y);
			setAllAttribute('available', false);
			setWhosPlaying(0);
			let score = countScore();
			setScore(score);
			// computer player
			console.log('Bot:')
			pos = getMove(1);
			safeSet(pos.x, pos.y, 1);
			changeTile(pos.x, pos.y, 1)
			score = countScore();
			setScore(score);
		}
		if (getAvailableMove(0).length == 0) {
			let score = countScore();
			if (getAvailableMove(0).length == 0) {
				alert('Game Done! '+(score.P1 > score.P2 ? 'P1 wins!' : (score.P1 < score.P2 ? 'Bot wins!' : 'Draw!')));
			}
			setWhosPlaying(0);
			setScore(score);
		}

	});
});