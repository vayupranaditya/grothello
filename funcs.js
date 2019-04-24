const getLocation = (id) => {
	let x = id.substr(3, 3);
	let y = id.substr(1, 1);
	console.log(x+','+y);
	return {'x' : x, 'y' : y};
};

const getContent = (x, y) => {
	return getAttribute(x, y, 'content');
};

const setContent = (x, y, obj) => {
	setAttribute(x, y, 'content', obj);
	setAttribute(x, y, 'immutable', true);
	if (obj === 0) {
		return fill(x, y, 'black');
	} else {
		return fill(x, y, 'white');
	}
};

const setAttribute = (x, y, key, value) => {
	let id = getId(x, y);
	$(id).attr('data-'+key, value);
};

const getAttribute = (x, y, key) => {
	let id = getId(x, y);
	return $(id).attr('data-'+key);
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
	console.log(locations)
	return locations;
}

const getFreeSurroundings = (poss) => {
	surs = [];
	n = 8;
	for (let i = 0; i < poss.length; i++) {
		x = poss[i].x;
		y = poss[i].y;
		if (y < n && getContent(x, y+1) === '-') surs.push({'x' : x, 'y' : y+1});
		if (y > 0 && getContent(x, y-1) === '-') surs.push({'x' : x, 'y' : y-1});
		if (x < n && getContent(x+1, y) === '-') surs.push({'x' : x+1, 'y' : y});
		if (x > 0 && getContent(x-1, y) === '-') surs.push({'x' : x-1, 'y' : y});
		if (x < n && y < n && getContent(x+1, y+1) === '-') surs.push({'x' : x+1, 'y' : y+1});
		if (x > 0 && y > 0 && getContent(x-1, y-1) === '-') surs.push({'x' : x-1, 'y' : y-1});
		if (x < n && y > 0 && getContent(x+1, y-1) === '-') surs.push({'x' : x+1, 'y' : y-1});
		if (x > 0 && y < n && getContent(x-1, y+1) === '-') surs.push({'x' : x-1, 'y' : y+1});
	}
	let id;
	for (let i = 0; i < surs.length; i++) {
		id = getId(surs[i].x, surs[i].y)
		$(id).html('<div style="width: 100%; height: 100%; border-radius: 50%; background-color: #0004"></div>');
	}
	console.log(surs);
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
		}
	}
}

const fill = (x, y, color) => {
	let id  = getId(x, y);
	if ($(id).attr('data-immutable') === "true") {
		$(id).html('<div style="width: 100%; height: 100%; border-radius: 50%; background-color: '+color+'"></div>');
		return true;
	} else {
		return false;
	}
}