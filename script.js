
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

    const update = (index, value) => {
        gameboard[index] = value;
        render();
    }

    const getgameboard = ()=> gameboard;
    return {
        render,
        update,
        getgameboard,
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
        let index = parseInt(event.target.id);
    
        // Check if the clicked square is already occupied
        if (gameboard.getgameboard()[index] !== "") {
            return; // Don't make any changes if the square is occupied
        }
    
        // Update the gameboard with the current player's mark
        gameboard.update(index, players[currentPlayerIndex].mark);
    
        // Toggle the current player's turn
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0; 
    };
    
    const restart = () => {
        for(let i = 0; i < 9; i++){
            gameboard.update(i, "");
        }
        gameboard.render();
    }
    
    return {
        start,
        restart, 
        handleClick,
    }
})();

const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', () =>{
    Game.restart();
})

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", () => {
    Game.start();
});