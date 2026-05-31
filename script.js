let userScore = 0;
let compuScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compuScorePara = document.querySelector("#compu-score");
const drawGame = () =>{
    
     msg.innerText ="game was draw";
      msg.style.backgroundColor ="#081b31";
};
const showWinner =(userWin,userChoice,compuChoice) =>{
    if(userWin){
         userScore++;
       userScorePara.innerText = userScore;
        
        msg.innerText =`You win! .your ${userChoice} beats ${compuChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
         compuScore++;
       compuScorePara.innerText = compuScore;
        
         msg.innerText =`You lost. your ${userChoice} beats ${compuChoice}`;
          msg.style.backgroundColor ="red";
    }
};

const playGame = (userChoice) =>{
console.log("user Choice =",userChoice);
// computer choice
const compuChoice =genCompuChoice();
console.log("compu Choice =",compuChoice);
if(userChoice === compuChoice){
drawGame();
}
else{
    let userWin = true;
    if(userChoice === "rock"){
   userWin = compuChoice ==="paper" ? false : true;   }
   else if(userChoice === "paper"){
    userWin = compuChoice === "scissors" ? false:true;
   }
   else{
    userWin = compuChoice ==="rock" ? false : true;
   }
   showWinner(userWin,userChoice,compuChoice);
}

};


const genCompuChoice = () =>{
    const options = ["rock","paper","scissors"];

    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
};


choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });

});