const toArray = () => {
	let arr = [];
	let row;
	for (let i = 1; i <= 8; i++) {
		row = [];
		for (let j = 1; j <= 8; j++) {
			row.push(getContent(i, j));
		}
		arr.push(row);
	}
	return arr;
}

const getMove = (obj) => {
	locs = getObjLocations(0);
	surs = getFreeSurroundings(locs);
	let moves = [];
	let num;
	let move = {'x' : 0, 'y' : 0, 'n' : 0};
	let max = 0;
	let timeStart, timeEnd;
	timeStart = performance.now();
	for (let i = 0; i < surs.length; i++) {
		x = surs[i].x;
		y = surs[i].y;
		num = 0;
		num += getN(x, y, 0);
		num += getE(x, y, 0);
		num += getS(x, y, 0);
		num += getW(x, y, 0);
		num += getNE(x, y, 0);
		num += getSE(x, y, 0);
		num += getSW(x, y, 0);
		num += getNW(x, y, 0);
		if (num > 0) {
			// console.log(x+', '+y+' with n: '+num)
			moves.push({'x' : x, 'y' : y, 'n' : num});
			if (num >= max) {
				max = num;
				move = {'x' : x, 'y' : y, 'n' : num};
			}
		}
	}
	timeEnd = performance.now();
	let time = timeEnd - timeStart;
	for (let i = 0; i < moves.length; i++) {
		console.log('('+moves[i].x+', '+moves[i].y+'): '+moves[i].n);
	}
	console.log('chosen: ('+move.x+', '+move.y+'): '+move.n+' in '+time.toFixed(4)+' ms')
	$('#time-p2').text('Moved ('+move.x+', '+move.y+') in '+time.toFixed(3)+' ms')
	return move;
}