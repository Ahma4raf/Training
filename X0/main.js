let dashboard = document.querySelector('.Dashboard');
let turn = 'x';
let squares = [];

let xscore = document.getElementById('xscore');
let oscore = document.getElementById('oscore');
let drawscore = document.getElementById('drawscore');
let resetButton = document.getElementById('resetButton')

let xScore = parseInt(localStorage.getItem('xScore')) || 0;
let oScore = parseInt(localStorage.getItem('oScore')) || 0;
let drawScore = parseInt(localStorage.getItem('drawScore')) || 0;
xscore.innerHTML = xScore;
oscore.innerHTML = oScore;
drawscore.innerHTML = drawScore;
resetButton.addEventListener('click', () => {
    
    xScore = 0;
    oScore = 0;
    drawScore = 0;
    xscore.innerHTML = xScore;
    oscore.innerHTML = oScore;
    drawscore.innerHTML = drawScore;
    localStorage.setItem('xScore', xScore);
    localStorage.setItem('oScore', oScore);
    localStorage.setItem('drawScore', drawScore);
});

let gameOver = false;

function style(num1, num2, num3) {
    dashboard.innerHTML = `${squares[num1]}  the Winner`;

    document.getElementById('square' + num1).style.background = 'black';
    document.getElementById('square' + num1).style.color = 'aquamarine';
    document.getElementById('square' + num2).style.background = 'black';
    document.getElementById('square' + num2).style.color = 'aquamarine';
    document.getElementById('square' + num3).style.background = 'black';
    document.getElementById('square' + num3).style.color = 'aquamarine';

    if (turn !== 'x') {
        xScore++;
        xscore.innerHTML = xScore;
        localStorage.setItem('xScore', xScore);
    } else {
        oScore++;
        oscore.innerHTML = oScore;
        localStorage.setItem('oScore', oScore);
    }

    if (xScore === 3 && oScore===0) {
        
        
    }
}

function refresh() {
    setInterval(function () {
        dashboard.innerHTML += '.';
    }, 1000);

    setTimeout(function () {
        location.reload();
    }, 2500);
}

function pickWinner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('square' + i).innerHTML
    }
    if (squares[1] === squares[2] && squares[2] === squares[3] && squares[3] !== '') {
        style(1, 2, 3);
        refresh();
        gameOver = true;
    } else if (squares[4] === squares[5] && squares[5] === squares[6] && squares[5] !== '') {
        style(4, 5, 6);
        refresh();
        gameOver = true;
    } else if (squares[7] === squares[8] && squares[8] === squares[9] && squares[7] !== '') {
        style(7, 8, 9);
        refresh();
        gameOver = true;
    } else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[7] !== '') {
        style(1, 4, 7);
        refresh();
        gameOver = true;
    } else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] !== '') {
        style(2, 5, 8);
        refresh();
        gameOver = true;
    } else if (squares[3] === squares[6] && squares[6] === squares[9] && squares[9] !== '') {
        style(3, 6, 9);
        refresh();
        gameOver = true;
    } else if (squares[1] === squares[5] && squares[5] === squares[9] && squares[1] !== '') {
        style(1, 5, 9);
        refresh();
        gameOver = true;
    } else if (squares[3] === squares[5] && squares[5] === squares[7] && squares[7] !== '') {
        style(3, 5, 7);
        refresh();
        gameOver = true;
    }

    const isDraw = squares.every(square => square !== '');

    if (isDraw) {
        dashboard.innerHTML = "It's a Draw!";
        drawScore++;
        drawscore.innerHTML = drawScore;
        localStorage.setItem('drawScore', drawScore);
        refresh();
        gameOver = true;
        updatescore();
    }
}

function playGame(id) {
    if (!gameOver) {
        let element = document.getElementById(id);
        if (turn === 'x' && element.innerHTML == '') {
            element.innerHTML = 'X';
            turn = 'o';
            dashboard.innerHTML = "It's O Turn";
        } else if (turn === 'o' && element.innerHTML == '') {
            element.innerHTML = 'O';
            turn = 'x';
            dashboard.innerHTML = "It's X Turn";
        }
        pickWinner();
    }
}

pickWinner();