
let gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "",""];

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="${index}">${square}</div>`;
        });
        document.querySelector('#gameboard').innerHTML = boardHTML;
        const squares = document.querySelectorAll('.square');
        console.log(squares);
        squares.forEach((square) => {
            square.addEventListener('click', Game.handleClick);
        });
    }
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
    let currentPlayerIndex;
    let gameOver ;

    const start = () => {
        players =[
            createPlayer(document.querySelector('#player1').value, 'X'),
            createPlayer(document.querySelector('#player2').value, 'O'),
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        gameboard.render();
    }

    const handleClick = (event) => {
        console.log(event.target.id); 
    }; 
    return {
        start,
        handleClick,
    }
})();

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", () => {
    Game.start();
});