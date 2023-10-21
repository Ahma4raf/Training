let dashboard = document.querySelector('.Dashboard');
let turn = 'x';
let squares = [];
let xScore = JSON.parse(localStorage.getItem('xScore')) || 0;
let oScore = JSON.parse(localStorage.getItem('oScore')) || 0;
let drawScore = JSON.parse(localStorage.getItem('drawScore')) || 0;

function style(num1, num2, num3) {
    dashboard.innerHTML = `${squares[num1]} are the Winner`;

    document.getElementById('square' + num1).style.background = 'black';
    document.getElementById('square' + num1).style.color = 'aquamarine';
    document.getElementById('square' + num2).style.background = 'black';
    document.getElementById('square' + num2).style.color = 'aquamarine';
    document.getElementById('square' + num3).style.background = 'black';
    document.getElementById('square' + num3).style.color = 'aquamarine';
}

function refresh() {
    setInterval(function () {
        dashboard.innerHTML += '.';
    }, 1000);

    setTimeout(function () {
        location.reload();
    }, 4000);
}

function pickWinner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('square' + i).innerHTML;
    }

    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            style(a, b, c);
            refresh();
            return;
        }
    }

    // Check for a draw
    const isDraw = squares.every(square => square !== '');

    if (isDraw) {
        dashboard.innerHTML = 'It\'s a Draw!';
        refresh();
    }
}

function playGame(id) {
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'o';
        dashboard.innerHTML = 'It\'s O Turn';
    } else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'x';
        dashboard.innerHTML = 'It\'s X Turn';
    }
    pickWinner();
}

// Call the pickWinner function initially to check for a draw
pickWinner();