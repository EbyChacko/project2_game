/* set the player 1 name to the screen */

let player1Btn = document.getElementById('player1-btn');
let player1div = document.getElementById('player1');
var name1 = '';

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
let player2Btn = document.getElementById('player2-btn');
let player2div = document.getElementById('player2');
var name2 = '';

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
 * start game function
 */
let notificationBtn = document.getElementById('notification-button');
let notification = document.getElementById('notification');
let currentPlayer;
notificationBtn.addEventListener('click', function () {
    if (notificationBtn.textContent === "Start Game") {

        if (name1 === '' || name2 === '') {
            notification.innerHTML = `Enter The Player Details First`;
        }
        else {
            notification.innerHTML = `Click the button to choose the first player`;
            notificationBtn.textContent = "Let's Toss";
        }

    }else if(notificationBtn.textContent === "Let's Toss"){
        let toss = Math.random();
        if (toss < 0.5) {
            currentPlayer = name1;
            notification.innerHTML = `${currentPlayer}'s Turn`;
            notificationBtn.textContent = "Restart";
        }
        else {
            currentPlayer = name2;
            notification.innerHTML = `${currentPlayer}'s Turn`;
            notificationBtn.textContent = "Restart";
        }
    }
}
)