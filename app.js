var scores, roundScore, activePlayer, gamePlaying;
 startGame() 

//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current-' + activePlayer).textContent = dice

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        //1. roll a die
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. display result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice' + dice + '.png';

        //3. update result if it is not a 1
        if(dice !==1){
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            
            //next player
            nextPlayer()

        } 

   }

})

document.querySelector('.btn-hold').addEventListener('click', function(){
   if (gamePlaying){
        // Add current score to global score 
            scores[activePlayer] += roundScore

        // update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        //check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'winner';
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('Winner!')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gamePlaying = false;
            
        }else{
            //next player
            nextPlayer()

        }

   }
    
})

document.querySelector('.btn-new').addEventListener('click', startGame)
    //reset player scores
    //startGame();
    

function startGame(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none'

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer(){
    //next player
    if (activePlayer === 0){
        activePlayer= 1
    } else {
        activePlayer = 0
    }
    roundScore = 0;

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.player-0-panel').classList.toggle('active')
document.querySelector('.player-1-panel').classList.toggle('active')

// document.querySelector('.player-0-panel').style.display='none'


}






