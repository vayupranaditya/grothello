$('document').ready(() => {
	initGrid();
	safeSet(4, 4, 0);
	safeSet(5, 5, 0);
	safeSet(4, 5, 1);
	safeSet(5, 4, 1);
	let turn = 0;
	getAvailableMove(turn%2);
	$('.is-1').click((e) => {
		let html = e.target.innerHTML;
		let pos = getLocation(e.target.id);
		if (setContent(pos.x, pos.y, turn % 2)) {
			removeAllFill();
			changeTile(pos.x, pos.y);
			turn++;
			setAllAttribute('available', false);
			setWhosPlaying(turn);
			let score = countScore();
			setScore(score);
		}
		if (getAvailableMove(turn%2).length == 0) {
			turn++;
			let score = countScore();
			if (getAvailableMove(turn%2).length == 0) {
				alert('Game Done! '+(score.P1 > score.P2 ? 'P1 wins!' : (score.P1 < score.P2 ? 'P2 wins!' : 'Draw!')));
			}
			setWhosPlaying(turn);
			setScore(score);
		}
	});
});