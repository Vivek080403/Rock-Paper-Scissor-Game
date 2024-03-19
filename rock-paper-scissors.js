let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses : 0,
    ties : 0
};
updateScore();	

/*if (score=== null){
score={
    wins: 0,
    losses : 0,
    ties : 0
};
}
*/
function updateScore(){
document.querySelector('.js-score').innerHTML=`Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
}
function playGame(playerMove){
const computerMove=pickComputerMove();
let result='';
if(playerMove==='Rock'){
    if(computerMove === 'Rock'){
        result='Tie.'
    }else if(computerMove === 'Paper'){
        result='You Lose.';
    }else if(computerMove === 'Scissors'){
        result='You Won.';
    }

}else if(playerMove==='Paper'){	
    if(computerMove === 'Rock'){
        result='You Won.'
    }else if(computerMove === 'Paper'){
        result='Tie.';
    }else if(computerMove === 'Scissors'){
        result='You Lose.';
    }

}else if (playerMove==='Scissors'){
    if(computerMove === 'Rock'){
        result='You Lose.'
    }else if(computerMove === 'Paper'){
        result='You Won.';
    }else if(computerMove === 'Scissors'){
        result='Tie.';
    }
}

if(result==='You Won.'){
    score.wins++;
}else if(result==='You Lose.'){
    score.losses++;
}else if(result==='Tie.'){
    score.ties++;
}
localStorage.setItem('score',JSON.stringify(score));
updateScore();

document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`

}
function pickComputerMove(){
const randomNumber=Math.random()
let computerMove='';
if (randomNumber>=0 && randomNumber<1/3){
    computerMove='Rock';
}else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove='Paper';
}else if(randomNumber>=2/3 && randomNumber<1){
    computerMove='Scissors';
}
return computerMove
}