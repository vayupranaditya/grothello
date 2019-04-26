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
			if (turn % 2 == 0) {
				$('.is-1').css('border-color', 'black');
			} else {
				$('.is-1').css('border-color', 'white')
			}
		}
		if (getAvailableMove(turn%2).length == 0) {
			if (setContent(pos.x, pos.y, turn % 2)) {
				removeAllFill();
				changeTile(pos.x, pos.y);
				turn++;
				setAllAttribute('available', false);
				if (turn % 2 == 0) {
					$('.is-1').css('border-color', 'black');
				} else {
					$('.is-1').css('border-color', 'white')
				}
			}
			if (getAvailableMove(turn%2).length == 0) {
				alert('Game Done');
			}
		}
		score = countScore();
	});
});