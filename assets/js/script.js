/* set the player 1 name to the screen */

let player1Btn = document.getElementById('player1-btn');
let player1div = document.getElementById('player1');

player1Btn.addEventListener('click', function () {
    let name1Input = document.getElementById('name1');
    let name1 = name1Input.value;
    if (name1 === '') {
        alertalert('Enter Name');
    }
    else {
        player1div.innerHTML = `<h3>Player 1</h3>
        <h4>Name : <strong>${name1}</strong></h4>`;
    }
});

/* set the player 2 name to the screen */
let player2Btn = document.getElementById('player2-btn');
let player2div = document.getElementById('player2');

player2Btn.addEventListener('click', function () {
    let name2Input = document.getElementById('name2');
    let name2 = name2Input.value;
    if (name2 === '') {
        alertalert('Enter Name');
    }
    else{
        player2div.innerHTML = `<h3>Player 2</h3>
        <h4>Name : <strong>${name2}</strong></h4>`;
    }
});