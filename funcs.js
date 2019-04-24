const getLocation = (id) => {
	let x = id.substr(3, 3);
	let y = id.substr(1, 1);
	return {'x' : x, 'y' : y};
};

const setAllAttribute = (key, value) => {
	for (let i=1; i <= 8; i++) {
		for (let j=1; j <= 8; j++) {
			let id = getId(i, j);
			$(id).attr('data-'+key, value);
		}
	}
}

const getContent = (x, y) => {
	return getAttribute(x, y, 'content');
};

const setContent = (x, y, obj) => {
	// console.log(getAttribute(x, y, 'immutable') == true);
	console.log(getAttribute(x, y, 'available') != 'true');
	if (getAttribute(x, y, 'available') != 'true') {
		console.log('NO!');
		return false;
	}
	setAttribute(x, y, 'content', obj);
	setAttribute(x, y, 'immutable', true);
	if (obj === 0) {
		fill(x, y, 'black');
	} else {
		fill(x, y, 'white');
	}
	return true;
};

const safeSet = (x, y, obj) => {
	setAttribute(x, y, 'content', obj);
	setAttribute(x, y, 'immutable', true);
	if (obj === 0) {
		fill(x, y, 'black');
	} else {
		fill(x, y, 'white');
	}
	return true;
};

const setAttribute = (x, y, key, value) => {
	let id = getId(x, y);
	$(id).attr('data-'+key, value);
};

const getAttribute = (x, y, key) => {
	let id = getId(x, y);
	return $(id).attr('data-'+key);
}

const removeAttribute = (x, y, key) => {
	let id = getId(x, y);
	$(id).removeAttr('data-'+key);
}

const getObjLocations = (obj) => {
	let locations = [];
	for (let i = 1; i <= 8; i++) {
		for (let j = 1; j <= 8; j++) {
			if (getContent(i, j) == obj) {
				locations.push({'x' : i, 'y' : j});
			}
		}		
	}
	return locations;
}

const getFreeSurroundings = (poss) => {
	surs = [];
	n = 8;
	for (let i = 0; i < poss.length; i++) {
		x = poss[i].x;
		y = poss[i].y;
		if (y < n && getContent(x, y+1) === '-') surs.push({'x' : x, 'y' : y+1});
		if (y > 1 && getContent(x, y-1) === '-') surs.push({'x' : x, 'y' : y-1});
		if (x < n && getContent(x+1, y) === '-') surs.push({'x' : x+1, 'y' : y});
		if (x > 1 && getContent(x-1, y) === '-') surs.push({'x' : x-1, 'y' : y});
		if (x < n && y < n && getContent(x+1, y+1) === '-') surs.push({'x' : x+1, 'y' : y+1});
		if (x > 1 && y > 1 && getContent(x-1, y-1) === '-') surs.push({'x' : x-1, 'y' : y-1});
		if (x < n && y > 1 && getContent(x+1, y-1) === '-') surs.push({'x' : x+1, 'y' : y-1});
		if (x > 1 && y < n && getContent(x-1, y+1) === '-') surs.push({'x' : x-1, 'y' : y+1});
	}
	return surs;
}

const getId = (x, y) => {
	return id = '#y' + y + 'x' + x;
}

const initGrid = () => {
	let id;
	for (let i = 1; i <= 8; i++) {
		for (let j = 1; j <= 8 ; j++) {
			setAttribute(i, j, 'content', '-');
			setAttribute(i, j, 'immutable', false);
			removeAttribute(i, j, 'available');
			setAttribute(i, j, 'available', false);
		}
	}
}

const fill = (x, y, color) => {
	removeFill(x, y);
	let id  = getId(x, y);
	$(id).html('<div style="width: 100%; height: 100%; border-radius: 50%; background-color: '+color+'"></div>');
}

const removeFill = (x, y, color) => {
	let id  = getId(x, y);
	$(id).html('');
}

const getN = (x, y, obj) => {
	let i = 0;
	n = 8;
	while (y < n && getContent(x, y+1) == obj) {
		y++;
		i++;
	}
	y++;
	if (getContent(x, y++) == (obj+1)%2) return i;
	return 0;
}

const getS = (x, y, obj) => {
	let i = 0;
	n = 8;
	while (y > 1 && getContent(x, y-1) == obj) {
		y--;
		i++;
	}
	y--;
	if (getContent(x, y--) == (obj+1)%2) return i;
	return 0;
}

const getE = (x, y, obj) => {
	let i = 0;
	n = 8;
	while (x < n && getContent(x+1, y) == obj) {
		x++;
		i++;
	}
	x++;
	if (getContent(x++, y) == (obj+1)%2) return i;
	return 0;
}

const getW = (x, y, obj) => {
	let i = 0;
	n = 8;
	while (x > 1 && getContent(x-1, y) == obj) {
		x--;
		i++;
	}
	x--;
	if (getContent(x--, y) == (obj+1)%2) return i;
	return 0;
}

const getNE = (x, y, obj) => {
	let i = 0;
	n = 8;
	while (x < n && y < n && getContent(x+1, y+1) == obj) {
		x++;
		y++
		i++;
	}
	x++;
	y++;
	if (getContent(x++, y++) == (obj+1)%2) return i;
	return 0;
}

const getSE = (x, y, obj) => {
	let i = 0;
	n = 8;
	while (x < n && y > 1 && getContent(x+1, y-1) == obj) {
		x++;
		y--;
		i++;
	}
	x++;
	y--;
	if (getContent(x++, y--) == (obj+1)%2) return i;
	return 0;
}

const getSW = (x, y, obj) => {
	let i = 0;
	n = 8;
	while (x > 1 && y > 1 && getContent(x-1, y-1) == obj) {
		x--;
		y--;
		i++;
	}
	x--;
	y--;
	if (getContent(x--, y--) == (obj+1)%2) return i;
	return 0;
}

const getNW = (x, y, obj) => {
	let i = 0;
	n = 8;
	while (x > 1 && y < n && getContent(x-1, y+1) == obj) {
		x--;
		y++;
		i++;
	}
	x--;
	y++;
	if (getContent(x--, y++) == (obj+1)%2) return i;
	return 0;
}

const getAvailableMove = (obj) => {
	obj = (obj+1) % 2;
	availableMoves = [];
	locs = getObjLocations(obj);
	surs = getFreeSurroundings(locs);
	let num;
	for (let i = 0; i < surs.length; i++) {
		x = surs[i].x;
		y = surs[i].y;
		num = 0;
		num += getN(x, y, obj);
		num += getE(x, y, obj);
		num += getS(x, y, obj);
		num += getW(x, y, obj);
		num += getNE(x, y, obj);
		num += getSE(x, y, obj);
		num += getSW(x, y, obj);
		num += getNW(x, y, obj);
		if (num > 0) {
			availableMoves.push(surs[i]);
			removeAttribute(x, y, 'available');
			setAttribute(x, y, 'available', true);
		} else {
			removeFill(x, y);
		}
	}
	let id;
	for (let i = 0; i < availableMoves.length; i++) {
		x = availableMoves[i].x;
		y = availableMoves[i].y;
		fill(x, y, '#bbb');
	}
}