let userScore = 0;
let compuScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compuScorePara = document.querySelector("#compu-score");
function showEmojiRainUser() {
    const emoji = "👍";

    for (let i = 0; i < 20; i++) {
        const span = document.createElement("span");

        span.innerText = emoji;
        span.style.position = "fixed";
        span.style.left = Math.random() * window.innerWidth + "px";
        span.style.top = "-50px";
        span.style.fontSize = Math.random() * 30 + 20 + "px";
        span.style.zIndex = "9999";
        span.style.pointerEvents = "none";

        document.body.appendChild(span);

        const duration = Math.random() * 3000 + 2000;

        span.animate(
            [
                { transform: "translateY(0px)" },
                { transform: `translateY(${window.innerHeight + 100}px)` }
            ],
            {
                duration: duration,
                iterations: 1,
                easing: "linear"
            }
        );

        setTimeout(() => {
            span.remove();
        }, duration);
    }
}
function showEmojiRainCompu() {
    const emoji = "👎";

    for (let i = 0; i < 20; i++) {
        const span = document.createElement("span");

        span.innerText = emoji;
        span.style.position = "fixed";
        span.style.left = Math.random() * window.innerWidth + "px";
        span.style.top = "-50px";
        span.style.fontSize = Math.random() * 30 + 20 + "px";
        span.style.zIndex = "9999";
        span.style.pointerEvents = "none";

        document.body.appendChild(span);

        const duration = Math.random() * 3000 + 2000;

        span.animate(
            [
                { transform: "translateY(0px)" },
                { transform: `translateY(${window.innerHeight + 100}px)` }
            ],
            {
                duration: duration,
                iterations: 1,
                easing: "linear"
            }
        );

        setTimeout(() => {
            span.remove();
        }, duration);
    }
}
const drawGame = () =>{
    
     msg.innerText ="game was draw";
      msg.style.backgroundColor ="#081b31";
};
const showWinner =(userWin,userChoice,compuChoice) =>{
    if(userWin){
         userScore++;
       userScorePara.innerText = userScore;
        showEmojiRainUser();
        
        msg.innerText =`You win! .your ${userChoice} beats ${compuChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
         compuScore++;
       compuScorePara.innerText = compuScore;
        showEmojiRaincompu();
        
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
