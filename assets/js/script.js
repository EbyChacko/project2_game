/**
 * declare all the tic tac toe variables
 */
let player1Btn = document.getElementById('player1-btn');
let player1div = document.getElementById('player1');
var name1 = '';

let player2Btn = document.getElementById('player2-btn');
let player2div = document.getElementById('player2');
var name2 = '';

let notificationArea = document.getElementsByClassName("notification-area")[0];
let headingArea = document.getElementsByClassName("heading-area")[0];
let notificationBtn = document.getElementById('notification-button');
let notification = document.getElementById('notification');
let currentPlayer;
let currentSymbol;
let gameStatus = false;

let clickedIndexes = ['', '', '', '', '', '', '', '', ''];
let cells = document.getElementsByClassName('cell');
let cellsContainer = document.getElementsByClassName('cells')[0];

let winCells = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let winStatus = false;

/* set the player 1 name to the screen */

    player1Btn.addEventListener('click', function () {
    let name1Input = document.getElementById('name1');
    if (name1Input !== null) {
        name1 = name1Input.value;
        if (name1 === '') {
            notification.innerHTML = `Enter The Player Name`;
        } else {
            player1div.innerHTML = `<h3>Player 1</h3>
        <h3>Name : <strong>${name1}</strong></h3>`;
            if (name2 === '') {
                notification.innerHTML = `Enter The Player 2 Name`;
            } else {
                notification.innerHTML = `Let's Start The Game`;
            }
        }
    }
});

/* set the player 2 name to the screen */

player2Btn.addEventListener('click', function () {
    let name2Input = document.getElementById('name2');
    name2 = name2Input.value;
    if (name2 === '') {
        notification.innerHTML = `Enter The Player Name`;
    }
    else {
        player2div.innerHTML = `<h3>Player 2</h3>
        <h3>Name : <strong>${name2}</strong></h3>`;
        if (name1 === '') {
            notification.innerHTML = `Enter The Player 1 Name`;
        }
        else {
            notification.innerHTML = `Let's Start The Game! Click The 'START' button`;
        }
    }
});

/**
 * notification Button functions
 */

notificationBtn.addEventListener('click', function () {
    if (notificationBtn.textContent === "START GAME") {

        if (name1 === '' || name2 === '') {
            notification.innerHTML = `Enter The Player's Details First`;
        }
        else {
            notification.innerHTML = `Click the 'TOSS' button to choose the first player`;
            notificationBtn.textContent = "TOSS";
        }

    } else if (notificationBtn.textContent === "TOSS") {
        let toss = Math.random();
        if (toss < 0.5) {
            currentPlayer = name1;
            currentSymbol = 'X';
            notification.innerHTML = `${currentPlayer}'s Turn`;
            notificationBtn.textContent = "RESTART";
            gameStatus = true;
        }
        else {
            currentPlayer = name2;
            currentSymbol = 'O';
            notification.innerHTML = `${currentPlayer}'s Turn`;
            notificationBtn.textContent = "RESTART";
            gameStatus = true;
        }
        startGame();

    } else if (notificationBtn.textContent === "RESTART") {
        playAgain();
    } else if (notificationBtn.textContent === "PLAY AGAIN") {
        playAgain();
    }
}
)

/**
 * set addEventListeners when game starting
 */

function startGame() {
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.addEventListener('click', cellClick);
    }
}

/**
 * this function working each time when the player click on the cells
 */
function cellClick() {
    let cellIndex = this.getAttribute('cellIndex');

    if (clickedIndexes[cellIndex] != "" || !gameStatus) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

/**
 * this function update the cells when the player click on the cells
 */

function updateCell(cell, index) {
    clickedIndexes[index] = currentSymbol;
    cell.textContent = currentSymbol;
    if (currentSymbol === "X") {
        cell.style.backgroundColor = ' #848a6c';
    }
    else {
        cell.style.backgroundColor = ' #837458';
    }
}

/**
 * this function change the player alternatively after the other player
 */
function changePlayer() {
    if (!gameStatus) {
        notification.innerHTML = `Game Draw`;
    }
    else {
        if (currentSymbol === "X") {
            currentPlayer = name2;
            currentSymbol = 'O';
            notification.innerHTML = `${currentPlayer}'s Turn`;
        }
        else {
            currentPlayer = name1;
            currentSymbol = 'X';
            notification.innerHTML = `${currentPlayer}'s Turn`;
        }
    }
}

/**
 * this function check for the winner
 */
function checkWinner() {
    for (i = 0; i < winCells.length; i++) {
        let win = winCells[i];
        let cell1 = clickedIndexes[win[0]];
        let cell2 = clickedIndexes[win[1]];
        let cell3 = clickedIndexes[win[2]];

        if (cell1 == '' || cell2 == '' || cell3 == '') {
            continue;
        }
        if (cell1 == cell2 && cell1 == cell3) {
            winStatus = true;
            break;
        }
    }

    for (let i = 0; i < clickedIndexes.length; i++) {
        if (clickedIndexes[i] === '') {
            break;
        }
        else if (i === clickedIndexes.length - 1) {
            notification.innerHTML = `Game Draw`;
            gameStatus = false;
        }
    }

    if (!winStatus) {
        changePlayer();
    }
    else {
        notification.innerHTML = `${currentPlayer} wins!!!`;
        gameStatus = false;
        notificationBtn.textContent = "PLAY AGAIN";
        if (currentSymbol === "X") {
            notificationArea.style.backgroundColor = "#848a6c";
            headingArea.style.backgroundColor = "#848a6c";
            document.body.style.backgroundColor = "#848a6c";
        }
        else {
            notificationArea.style.backgroundColor = "#837458";
            headingArea.style.backgroundColor = "#837458";
            document.body.style.backgroundColor = "#837458";
        }
    }
}

/**
 * this function reset all the values if the players click play again button
 */
function playAgain() {
    currentPlayer = "";
    currentSymbol = "";
    gameStatus = false;
    clickedIndexes = ['', '', '', '', '', '', '', '', ''];
    winStatus = false;
    cellsContainer.innerHTML = `<div cellIndex="0" class="cell"></div>
        <div cellIndex="1" class="cell"></div>
        <div cellIndex="2" class="cell"></div>
        <div cellindex="3" class="cell"></div>
        <div cellindex="4" class="cell"></div>
        <div cellindex="5" class="cell"></div>
        <div cellindex="6" class="cell"></div>
        <div cellindex="7" class="cell"></div>
        <div cellindex="8" class="cell"></div>`;
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.addEventListener('click', cellClick);
    }
    notificationBtn.textContent = "TOSS";
    notification.innerHTML = `Click the 'TOSS' button to choose the first player`;
    notificationArea.style.backgroundColor = "rgb(75, 137, 133)";
    headingArea.style.backgroundColor = "rgb(75, 137, 133)";
}

