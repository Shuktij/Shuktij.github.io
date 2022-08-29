
	var msg = document.getElementById('msg');
	var reset = document.getElementById('reset');
	var ans = 'ROLEX';
	var mat = [];
	var gameover = false;
	var x = 0;
	var y = 0;

	for (var i = 0; i < 6; i ++) {
		mat.push([]);
		for (var j = 0; j < 5; j ++) {
			mat[i][j] = document.getElementById(`w${i}${j}`);
			mat[i][j].innerText = '';
		}
	}

	var newline = () => {
		if (x < 5) {
			x += 1;
			y = 0;
			return true;
		}
		return false;
	};

	reset.onclick = () => {
		reset.blur();
		msg.innerText = 'Best of Luck !!';
		gameover = false;
		x = 0;
		y = 0;
		for (var i = 0; i < 6; i ++) {
			for (var j = 0; j < 5; j ++) {
                mat[i][j].innerText = ''.toUpperCase();
                mat[i][j].style.backgroundColor = 'unset';
			}
		}
	};

	document.addEventListener('keydown', (event) => {
		if (!gameover) {
			if (event.key == 'Backspace') {
                if (y > 0) {
                    y -= 1;
                }
                mat[x][y].innerText = ''.toUpperCase();
			} else if (event.key == 'Enter') {
				if (y == 5) {
                    var score = 0;
		            var test = ans.toUpperCase().split('');
		            for (var j = 0; j < 5; j ++) {
			            var temp = mat[x][j].innerText;
			            if (test[j] == temp) {
                            mat[x][j].style.backgroundColor = '#538d4e';
				            test[j] = '';
				            score += 1;
			            }
		            }
		            for (var j = 0; j < 5; j ++) {
			            var temp = mat[x][j].innerText;
			            if (test.includes(temp)) {
                            mat[x][j].style.backgroundColor = '#b59f3b';
				            test[test.indexOf(temp)] = '';
			            }
		            }
					if (score == 5) {
						gameover = true;
						msg.innerText = `Congratulations! The word is '${ans}'.`;
						return;
					}
					var new_word = false;
                    if (x < 5) {
                        x += 1;
                        y = 0;
                        new_word = true;
                    }
					if (!new_word) {
						gameover = true;
						msg.innerText = `Well Tried! The word is '${ans}'.`;
					}
				}
			} else if (event.key.toUpperCase() !== event.key.toLowerCase() && event.key.length == 1) {
				if (y < 5) {
                    mat[x][y].innerText = event.key.toUpperCase();
                    if (y < 5) {
                        y += 1;
                    }
				}
			}
		}
	});