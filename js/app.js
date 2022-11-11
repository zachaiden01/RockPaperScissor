let words = ["scissor", "paper", "rock"];

let rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", turnRock);

function turnRock() {

    let x = words[Math.floor(Math.random()*words.length)];
    switch (x) {
        case "scissor":
            document.querySelector("#display").innerHTML = "A.I Pick Scissor - You Win";
                break;
        case "paper":
            document.querySelector("#display").innerHTML = "A.I Pick Paper - Computer Win";
                break;
        case "rock":
            document.querySelector("#display").innerHTML = "A.I Pick Rock - It`s a tie";
            break;
    }        
}

let paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", turnPaper);

function turnPaper() {

    let x = words[Math.floor(Math.random()*words.length)];
    switch (x) {
        case "scissor":
            document.querySelector("#display").innerHTML = "A.I Pick Scissor - Computer Win";
            break;
        case "paper":
            document.querySelector("#display").innerHTML = "A.I Pick Paper - It`s a tie";
            break;
        case "rock":
            document.querySelector("#display").innerHTML = "A.I Pick Rock - You Win";
            break;
    }  
}

let scissorBtn = document.querySelector("#scissorBtn");
scissorBtn.addEventListener("click", turnScissor);

function turnScissor() {

    let x = words[Math.floor(Math.random()*words.length)];
    switch (x) {
        case "scissor":
            document.querySelector("#display").innerHTML = "A.I Pick Scissor - It`s a tie";
            break;
        case "paper":
            document.querySelector("#display").innerHTML = "A.I Pick Paper - You Win";
            break;
        case "rock":
            document.querySelector("#display").innerHTML = "A.I Pick Rock - Computer Win";
            break;
    }  
}

let resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", resetGame);

function resetGame() {

}

