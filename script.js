let Scorebutton = document.getElementById("Score-button");
let Score = 0;
let ScoreShower = document.getElementById("Score");
let OneHundred = document.getElementById("100-reached");
let restart = document.getElementById("Restart");
let HighscoreShower = document.getElementById("highscore");
let highscore = localStorage.getItem("PlayerHighScore")||0;
HighscoreShower.textContent = "Your Highscore is " + highscore;

Scorebutton.addEventListener('click',function(){
  Score += 1
  ScoreShower.textContent = "Your score is "+ Score;
  if(Score > highscore) {
     highscore = Score;
     localStorage.setItem("PlayerHighScore",highscore)|| 0;
     HighscoreShower.textContent = "Your highscore is " + highscore; 
  }
  if (Score === 100){
    OneHundred.style.display = "block"
    OneHundred.textContent = "Congratulations! 100 reached ";
  }else if(Score === 101 ) {
    OneHundred.style.display = "none"
  }
}); 
restart.addEventListener('click',function(){
   Score = 0 
   OneHundred.style.display = "none"
   ScoreShower.textContent = "Your score is "+ Score;
});