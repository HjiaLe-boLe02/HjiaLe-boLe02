var png = document.getElementsByClassName('png');

var dot = document.getElementsByClassName('dot');

var leftBtn = document.getElementById('leftBtn');

var rightBtn = document.getElementById('rightBtn');

var index = -1;

var timer = '';

auto();

function auto() {
	if (index < png.length - 1) {
		index++
	} else {
		index = 0
	}
	goIndex()
};

leftBtn.onclick = function() {
	if (index > 0) {
		index--;
	} else {
		index = png.length - 1;
	}
	goIndex();
}
rightBtn.onclick = function() {
	if (index < png.length - 1) {
		index++;
	} else {
		index = 0;
	}
	goIndex();
}

function goIndex() {
	if (timer != '') {
		clearTimeout(timer)
	}
	for (var i = 0; i < png.length; i++) {
		if (i == index) {
			png[i].classList.add('pngAdd');
			dot[i].classList.add('dotAdd');
		} else {
			png[i].classList.remove('pngAdd');
			dot[i].classList.remove('dotAdd');
		}
	}
	timer = setTimeout("auto()", 1500);
};

for (var i = 0; i < png.length; i++) {
	png[i].onmousemove = function() {
		clearTimeout(timer)
	}
	png[i].onmouseout = function() {
		timer = setTimeout("auto()", 1500);
	}
}

for (var i = 0; i < dot.length; i++) {
	dot[i].onclick = function() {
		for (var j = 0; j < dot.length; j++) {
			if (this == dot[j]) {
				index = j;
				goIndex()
			}
		}
	}
};
