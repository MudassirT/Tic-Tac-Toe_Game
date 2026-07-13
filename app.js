let boxes = document.querySelectorAll("#box");
let reset = document.querySelector("#reset");
let winner = document.querySelector("#winner");
let winnerPara = document.querySelector("#winnerPara");
let winnerPop = document.querySelector(".winnerPop");
let newGame = document.querySelector("#newGame")
let turn = true;
let isFull = true
let clickCount = 0
let gameOver = false
//  Main Logic of the Game
let winnerPattren = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
// Function to display the winner
function showWinner(pattren1Value) {
    winnerPara.textContent = `🎉 Congratulations "${pattren1Value}" is Win The Game`
    winnerPop.classList.remove("hide");
    gameOver = true;
}
let restartBtn =()=>{
    reset.addEventListener("click",()=>{
        location.reload()
    })
}
let newBtn =()=>{
    newGame.addEventListener("click",()=>{
        location.reload()
    })
}
let teiGame = ()=>{
    winnerPara.textContent = `Oops, Game Tie Please Try Again.`
    winnerPop.classList.remove("hide");
}
let countCheck = ()=>{
     if(clickCount === 9 && !gameOver){
        teiGame();
    }
}
let checkPattren = ()=>{


    for(let pattren of winnerPattren){
        let pattren1 = boxes[pattren[0]].innerText
        let pattren2 = boxes[pattren[1]].innerText
        let pattren3 = boxes[pattren[2]].innerText
        if(pattren1 !== "" && pattren2 !== "" && pattren3 !== ""){
            if(pattren1 === pattren2 && pattren2 === pattren3){
                showWinner(pattren1);
                return;
            }
        }
    }
}


newBtn();
restartBtn();

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(gameOver || box.innerText !== "") return;
        clickCount++;
        if(turn){
            box.style.color = "red"
            box.innerText = "O"
            turn = false
            box.disabled = true
        }else{
            box.style.color = "#3777FF"
            box.innerText = "X"
            turn = true
            box.disabled = true
        }
        checkPattren();
        if(!gameOver) countCheck();
    })
})
