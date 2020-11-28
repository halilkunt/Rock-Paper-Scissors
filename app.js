function startGame(){
    const buttons = document.querySelectorAll("button");
    let playerScore = 0;
    let computerScore = 0;


    const resultText = document.querySelector(".result");

    resultText.innerText = "Start the game";

    buttons.forEach(button => button.addEventListener("click", playGame));

    buttons.forEach(button => button.addEventListener("transitionend", endTransition));    

    function playGame(){

       const footer = document.querySelector("footer");

       if(footer.style.visibility = "hidden"){
        footer.style.visibility = "visible";
       }
       

        const playerSelection = this.getAttribute("data-selection");
        this.classList.add("shine");

        const computerSelection = moveComputer();

        
        const computerSelectionDiv = document.querySelector(`.${computerSelection}`);
        computerSelectionDiv.classList.add("shine");
        computerSelectionDiv.addEventListener("transitionend", endTransition);

        resultText.classList = "result";

        if(playerSelection === computerSelection){
            resultText.innerText = "It's a tie";
            resultText.classList.add("gray");
        }else if(playerSelection === "ROCK"){
            if(computerSelection === "PAPER"){
                computerScore++;
                resultText.innerText = "You Lose! Paper beats Rock";
                resultText.classList.add("red");
            }else{
                playerScore++;
                resultText.innerText = "You Won! Rock beats Scissors";
                resultText.classList.add("blue");
            }
        }else if(playerSelection === "PAPER"){
            if(computerSelection === "SCISSORS"){
                computerScore++;
                resultText.innerText = "You Lose! Scissors beats Paper";
                resultText.classList.add("red");
                
            }else{
                playerScore++;
                resultText.innerText = "You Won! Paper beats Rock";
                resultText.classList.add("blue");
            }
        }else if(playerSelection === "SCISSORS"){
            if(computerSelection === "ROCK"){
                computerScore++;
                resultText.innerText = "You Lose! Rock beats Scissors";
                resultText.classList.add("red");
                
            }else{
                playerScore++;
                resultText.innerText = "You Won! Scissors beats Paper";
                resultText.classList.add("blue");
            }
        }

        
        changeScore();

        if(playerScore === 5 || computerScore === 5){
            endTheGame(resultText);
        }
        
       
    }

   
    function endTransition(e){
          if(e.propertyName === "transform"){
              this.classList.remove("shine");
          }
         
    }

    function moveComputer(){
        const moves = ["ROCK", "PAPER", "SCISSORS"];

        return moves[Math.floor(Math.random() * moves.length)];

    }

    function changeScore(){
        const playerScoreText = document.querySelector(".playerScore");
        const computerScoreText = document.querySelector(".computerScore");

        playerScoreText.innerText = playerScore;
        computerScoreText.innerText = computerScore;

        if(playerScore > computerScore){
            playerScoreText.style.color = "blue";
            computerScoreText.style.color = "red";
        }else if(playerScore < computerScore) {
            playerScoreText.style.color = "red";
            computerScoreText.style.color = "blue";
        }else{
            playerScoreText.style.color = "gray";
            computerScoreText.style.color = "gray";
        }


    }

    function endTheGame(result){

        if(computerScore > playerScore){
            result.innerText = "You have lost the game, you have to play again."
        }else{
            result.innerText = "Lucky youu. You won the game but I bet you can't win one more time."
        }
        
        buttons.forEach(button => {
             button.removeEventListener("click", playGame);
             button.classList.remove("mouse-over");
            });


    }
    
}

function playAgain(){

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.classList.add("mouse-over"));

    document.querySelector(".playerScore").innerText = "0";
    document.querySelector(".computerScore").innerText = "0";

    startGame();

}


const blockButton = document.querySelector(".block-button");

blockButton.addEventListener("click", () => blockButton.parentNode.style.display = "none");

const replayButton = document.querySelector(".play");

replayButton.addEventListener("click", playAgain);

startGame();