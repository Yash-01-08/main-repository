





















let btn1 = document.getElementById("hover1");
let btn2 = document.getElementById("hover2");
let box1 = document.querySelector(".drop_menu1");
let box2= document.querySelector(".drop_menu2");

box1.style.backgroundcolor = "blue";
   

let idx1=0 ;
let idx2 =0;



if(idx1==0){
    btn1.addEventListener("click",  ()=>{
        box1.style.display = "";
        idx1=1;
        
    }); 
    btn2.addEventListener("click",  ()=>{
        box2.style.display = "";
      idx2=1;
    }); 
}
if(idx1==1){
    btn1.addEventListener("click",  ()=>{
        box1.style.display = "none";
        idx1=0;
        
    }); 
    btn2.addEventListener("click",  ()=>{
        box2.style.display = "none";
      idx2=0;
    }); 
}