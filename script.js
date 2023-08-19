
let gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "",""];

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="${index}">${square}</div>`;
        });
    }
})

const startButton = document.querySelector("#startButton");
starrtButton.addEventListener("click", () => {
    //Game.start();
});