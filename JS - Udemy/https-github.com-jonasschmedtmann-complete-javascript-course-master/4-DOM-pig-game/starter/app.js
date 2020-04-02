/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying, rollList, maxScore;

// gamePlaying = true;
rollList = [];
rollList1 = [];

init();

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'</em>'

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. We need a random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        var diceDOM1 = document.querySelector('.dice1');
        
        diceDOM.style.display = 'block';
        diceDOM1.style.display = 'block';
        
        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM1.src = 'dice-' + dice1 + '.png';

        //3. Update the round score IF the number is not 1
        if (dice !== 1 && dice1 !== 1) {
        //Add score
        roundScore += (dice + dice1);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

        // 4. Add the different rolls to a list
        rollList.push(dice);
        rollList1.push(dice1);
        // console.log(rollList);
        // console.log(rollList1);

        // 5. Check if consecutive rolls are the same
        for (var i = 0; i < rollList.length; i++) {
            if (rollList[i] === rollList[i-1] && rollList[i-1] === 6) {
                document.getElementById('score-' + activePlayer).textContent = 0;
                scores[activePlayer] = 0;
                console.log('Player ' + (activePlayer+1) + ' rolled ' + rollList[i-1] + ' twice');
                nextPlayer();
            }else if(rollList1[i] === rollList1[i-1] && rollList1[i-1] === 6){
                document.getElementById('score-' + activePlayer).textContent = 0;
                scores[activePlayer] = 0;
                console.log('Player ' + (activePlayer+1) + ' rolled ' + rollList1[i-1] + ' 2ice');
                nextPlayer();
            }else if (rollList[i] === rollList1[i] && rollList1[i] === 6) {
                document.getElementById('score-' + activePlayer).textContent = 0;
                scores[activePlayer] = 0;
                console.log('Player ' + (activePlayer+1) + ' rolled two ' + rollList1[i] + ' at the same time');
                nextPlayer();
            };
        };


    } else {
        //Next Player
        if (dice === 1) {
            console.log('Player ' + (activePlayer + 1) + ' rolled a ' + dice);    
        }else if (dice1 === 1){
            console.log('Player ' + (activePlayer + 1) + ' rolled a ' + dice1);
        };
        
        nextPlayer();


        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
        
    };

    
    }
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        
        //1. Add current score to the global score
        scores[activePlayer] += roundScore;


        //2. Update the user-interface
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];


        //3. Check if the player won the game
        
        //Read maximum score from input field
        
        maxScore = document.getElementById('max-score').value;
        var maximumScore;
         // console.log(maxScore);
         
         if(maxScore){
            maximumScore = maxScore;
         }else{
            maximumScore = 100;
         };
         // console.log(maximumScore);

        if (scores[activePlayer] >= maximumScore){
        // console.log('Player ' + activePlayer + 1 + ' wins the game');
        document.getElementById('name-' + activePlayer).textContent = 'Winner!!';

        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice1').style.display = 'none';

        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

        gamePlaying = false;
    }else{
        // console.log('Hi');
        console.log('Player ' + (activePlayer + 1) + ' held.');
        nextPlayer();
    }

    //4. Next Player
    // nextPlayer();

    };
    
})

document.querySelector('.btn-new').addEventListener('click', init);
    
function init(){
    activePlayer = 0;
    roundScore = 0;
    scores = [0,0];
    gamePlaying = true;
    rollList = [];
    rollList1 = [];

    document.getElementById('score-0').textContent   = '0';
    document.getElementById('score-1').textContent   = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.dice').style.display = 'none'; //to change css
    document.querySelector('.dice1').style.display = 'none';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        rollList = [];
        rollList1 = [];

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice1').style.display = 'none';
}