let choice=()=>{
    let randomNumber=Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:return "rock";
        break;
        case 1:return "paper";
        break;
        case 2:return "scissors";
        break;
    }
}
function playRound(playerSelection,computerSelection){
    playerselection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    if(playerSelection==computerSelection){
        console.log("It's a tie.");
        return 0;
    }
    else if(playerSelection=="rock"&&computerSelection=="paper"){
        console.log("You Lose! Paper beats Rock");
        return 0;
    }
    else if(playerSelection=="paper"&&computerSelection=="rock"){
        console.log("You Win! Paper beats Rock");
        return 1;
    }
    else if(playerSelection=="rock"&&computerSelection=="scissors"){
        console.log("You Win! Rock beats Scissors");
        return 1;
    }
    else if(playerSelection=="paper"&&computerSelection=="scissors"){
        console.log("You Lose! Scissors beats Paper");
        return 0;
    }
    else if(playerSelection=="scissors"&&computerSelection=="paper"){
        console.log("You Win! Scissors beats Paper");
        return 1;
    }
    else if(playerSelection=="scissors"&&computerSelection=="rock"){
        console.log("You Lose! Rock beats Scissors");
        return 0;
    }
    
}
function playGame(){
    let res=0;
    for(let i=0;i<5;i++){
        let playerSelection=prompt("Rock,Paper or Scissors?",choice());
        let computerSelection=choice();
        res+=playRound(playerSelection,computerSelection);
    }
    if(res==2){
        console.log("It's a tie");
    }
    else if(res>2){
        console.log("You Win");
    }
    else if(res<2){
        console.log("You Lose");
    }
}
playGame();
