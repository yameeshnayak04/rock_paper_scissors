let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const statement = document.querySelector("#msg");

const score1 = document.querySelector("#user-score");
const score2 = document.querySelector("#comp-score");

const genCompChoice = () => {
    const arr = ["rock", "paper", "scissors"];
    let t = Math.floor(Math.random() * 3);
    const compChoice = arr[t];
    return compChoice;
}

const playGame = (userChoice) => {
    
    let userWin = true;
    let compChoice = genCompChoice();
    if(userChoice === compChoice){
        console.log("This is a Draw! Play Again");
        statement.innerText = "Game is Drawn!";
        statement.style.backgroundColor = "black";
    }
    else{
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }

        if(userWin){
            statement.innerText = "You Win!";
            statement.style.backgroundColor = "green";
            userScore++;
            score1.innerText = userScore;
        }
        else{
            statement.innerText = "You Lose!";
            statement.style.backgroundColor = "red";
            compScore++;
            score2.innerText = compScore;
        }
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

