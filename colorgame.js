var numsquares = 6;
var color = [];
var pickedcolor;
var clickedcolor;
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var resetbutton = document.querySelector('#reset');
var messagedisplay = document.getElementById('message');
var backcolordisplay = document.getElementById('hone');
var modebutton = document.querySelectorAll(".mode");

init();

function init() {
  setupmodebuttons();
  setupsquarelisteners();
  reset();
}

function setupsquarelisteners() {
  for(var i = 0; i < squares.length; i++){
       // add click listeneres to squares
       squares[i].addEventListener("click", function(){
       // grab color of clicked squares
        clickedcolor = this.style.backgroundColor;
       // compare color to pikedcolor
       if(clickedcolor === pickedcolor){
         messagedisplay.textContent = 'Correct';
         samecolor(clickedcolor);
         resetbutton.textContent = "PLAY AGAIN?";
         backcolordisplay.style.backgroundColor = pickedcolor;
         //alert(getRandomColor());
       }
       else{
         messagedisplay.textContent = 'Try Again'  ;
         this.style.backgroundColor = "#232323";
       }
   });
  }
}

function setupmodebuttons() {
  for(var i = 0;i < modebutton.length; i++){
    modebutton[i].addEventListener("click", function() {
      modebutton[0].classList.remove("selected");
      modebutton[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === "Easty"){
        numsquares = 3;
      }
      else {
        numsquares = 6;
      }
      reset();
      //this.textContent === "Easy" ? numsquares = 3: numsquares = 6;
    });
  }
}

function reset() {
  color = generaterandomcolor(numsquares);
  //pick a new random color from array
  pickedcolor = pickcolor();
  //change colordisplay to match picked color
  colordisplay.textContent = pickedcolor;
  resetbutton.textContent = "New Colors";
  //change the message in stripe
  messagedisplay.textContent = ' ';
  //change the colors in squares
  for(var i = 0; i < squares.length; i++){
    if(color[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = color[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
  backcolordisplay.style.backgroundColor = "steelblue";
}


resetbutton.addEventListener("click",function() {
  reset();
});


function samecolor(color) {
  //loop through all sauares
  for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickcolor() {
  var random = Math.floor(Math.random() * 6);
  return color[random];
}

function generaterandomcolor(num){
  //make an array
  var arr = [];
  //repeat num times
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomcolor());
  }
  //return that array
  return arr;
}

function randomcolor() {
  //pick a "red" from 0 to -255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 to -255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to -255
  var b = Math.floor(Math.random() * 256);

  return  "rgb(" + r + ", " + g + ", "+ b + ")";
}
