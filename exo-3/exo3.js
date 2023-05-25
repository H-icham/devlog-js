// you can write js here
console.log('exo-3');


//1
var playerInput = prompt("Your choice ( rock, paper, scissors) ?")


//2
function getPlayerChoice(playerInput){
    playerInput = playerInput.toLowerCase();
    if(playerInput=='rock'|| playerInput=='paper'|| playerInput=='scissors'|| playerInput=='bomb'){
        return (playerInput);
    }
    else {
        console.log('erreur')
    }
    
}

var result = getPlayerChoice(playerInput)
console.log (result)



function getComputerChoice(){
    var choice = ['rock', 'paper', 'scissors'];
    var index = Math.floor(Math.random() * (choice.length -1));
    var result = choice[index];
    return result;
}

getComputerChoice()



function findWinner(playerChoice, computerChoice){
    if(playerChoice=='bomb'){
        console.log('Won')
    }
    
    
    else if(playerChoice==computerChoice){
        console.log('Tied');
    }
    else if(playerChoice!==computerChoice){
        if(playerChoice=='rock' && computerChoice=='scissors'){
            console.log('Won')
        }
        else{
            console.log('Lost')
        }
    }
    
    else if(playerChoice=='paper'){
        if(computerChoice=='rock'){
            console.log('Won')
        }
        else{
            console.log('lost')
        }
    }
    
    else if(playerChoice=='scissors'){
        if(computerChoice=='paper'){
            console.log('Won')
        }
        else{
            console.log('Lost')
        }
    }
    
    
    
    
}


function playGame(){
    var uChoice = getPlayerChoice('rock')
    var computerChoice = getComputerChoice()
    console.log(uChoice)
    console.log(computerChoice)
    
    findWinner(uChoice, computerChoice)
    
}
playGame()


