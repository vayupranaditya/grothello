$('document').ready(() => {
	initGrid();
	let turn = 0;
	$('.is-1').click((e) => {
		let html = e.target.innerHTML;
		let pos = getLocation(e.target.id);
		if (setContent(pos.x, pos.y, turn % 2)) {
			turn++;
		}
	});
});