
let player1Btn = document.getElementById('player1-btn');
let player1div = document.getElementById('player1');
var name1 = '';

let player2Btn = document.getElementById('player2-btn');
let player2div = document.getElementById('player2');
var name2 = '';

let notificationBtn = document.getElementById('notification-button');
let notification = document.getElementById('notification');
let currentPlayer;
let currentSymbol;
let gameStatus = false;

let clickedIndexes = ['', '', '', '', '', '', '', '', ''];
let cells = document.getElementsByClassName('cell');

/* set the player 1 name to the screen */

player1Btn.addEventListener('click', function () {
    let name1Input = document.getElementById('name1');
    name1 = name1Input.value;
    if (name1 === '') {
        notification.innerHTML = `Enter The Player Name`;
    }
    else {
        player1div.innerHTML = `<h3>Player 1</h3>
        <h2>Name : <strong>${name1}</strong></h2>`;
        if (name2 === '') {
            notification.innerHTML = `Enter The Player 2 Name`;
        }
        else {
            notification.innerHTML = `Let's Start The Game`;
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
        <h2>Name : <strong>${name2}</strong></h2>`;
        if (name1 === '') {
            notification.innerHTML = `Enter The Player 1 Name`;
        }
        else {
            notification.innerHTML = `Let's Start The Game`;
        }
    }
});

/**
 * notification Button functions
 */

notificationBtn.addEventListener('click', function () {
    if (notificationBtn.textContent === "Start Game") {

        if (name1 === '' || name2 === '') {
            notification.innerHTML = `Enter The Player Details First`;
        }
        else {
            notification.innerHTML = `Click the button to choose the first player`;
            notificationBtn.textContent = "Let's Toss";
        }

    } else if (notificationBtn.textContent === "Let's Toss") {
        let toss = Math.random();
        if (toss < 0.5) {
            currentPlayer = name1;
            currentSymbol = 'X';
            notification.innerHTML = `${currentPlayer}'s Turn`;
            notificationBtn.textContent = "Restart";
            gameStatus = true;
        }
        else {
            currentPlayer = name2;
            currentSymbol = 'O';
            notification.innerHTML = `${currentPlayer}'s Turn`;
            notificationBtn.textContent = "Restart";
            gameStatus = true;
        }
        startGame();

    }
}
)



function startGame() {
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.addEventListener('click', cellClick);
    }
}

function cellClick(){
    let cellIndex = this.getAttribute('cellIndex');

    if(clickedIndexes[cellIndex]!= "" || !gameStatus){
        return;
    }

    updateCell(this , cellIndex);
    
}

function updateCell(cell, index){
    clickedIndexes[index]=currentSymbol;
    cell.textContent=currentSymbol;
    if(currentSymbol==="X"){
        cell.style.backgroundColor = ' #848a6c';
    }
    else{
        cell.style.backgroundColor = ' #837458';
    }
}




