let gameseq  =[];
let userseq = [];
 
let btns = ["yellow","red","purple","green"];


let started = false;
let lvl  =0 ;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
if(started==false){
  console.log("Game Started");
started = true;
levelUp();

}
});

function levelUp() {
  userseq = [];
  lvl++;
  h2.innerText = `Level ${lvl}`;
let randIdx = Math.floor(Math.random()*3);
let randclr = btns[randIdx];
gameseq.push(randclr);
console.log(gameseq);

let randbtn = document.querySelector(`.${randclr}`);

 btnflash(randbtn);
}

function btnflash(btn){ 

btn.classList.add("flash");
setTimeout(function(){
  btn.classList.remove("flash");
},250)
 }

 function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250)

}


function checkAns(idx){

if(userseq[idx]==gameseq[idx]){
if(userseq.length==gameseq.length){
 setTimeout(function(){
  levelUp();
 } ,500);
  

}



}else{
  h2.innerText = `Game Over! Your Score was ${lvl} . Press Any key Start`;
   let body = document.querySelector("body");
   body.classList.add("redflash");
  setTimeout(function(){
    body.classList.remove("redflash")
  },150);
  reset();
}



}
  
 function btnpress(){
let btn = this;
userflash(btn);
 usercolor = btn.getAttribute("id");
userseq.push(usercolor);
checkAns(userseq.length-1);
 } 


let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns ){
 btn.addEventListener("click",btnpress);

}
function reset (){
started=false;
gameseq = [];
userseq= [];
lvl = 0;

}