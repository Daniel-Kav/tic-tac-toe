
let gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "",""];

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="${index}">${square}</div>`;
        });
    }
    document.querySelector('#gameboard').innerHTML = boardHTML;
    return {
        render,
    }
})();

const createPlayer = (name,mark) => {
    return {
        name,
        mark,
    }
};

const Game = (() => {
    let players = [];
    let currentPlayer = 0;
    let gameOver = false;

    const start = () => {
        players =[
            createPlayer(document.querySelector('#player1').value, 'X'),
            createPlayer(document.querySelector('#player2').value, 'O'),
        ]
    }
})();

const startButton = document.querySelector("#startButton");
starrtButton.addEventListener("click", () => {
    //Game.start();
});