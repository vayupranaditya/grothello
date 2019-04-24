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
			turn++;
			setAllAttribute('available', false);
		}
		getAvailableMove(turn%2);
	});
});