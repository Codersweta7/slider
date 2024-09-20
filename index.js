
   var slide=document.querySelector(".slide");
   var upArrow=document.querySelector("#upArrow");
   var downArrow=document.querySelector("#downArrow");

   let x=0;
   upArrow.onclick =function(){
    if(x>-1500){
    x = x-300;
    slide.style.top=x+"px";
}

   }
   downArrow.onclick =function(){
    if(x<0){
    x = x+300;
    slide.style.top=x+"px";

    }}

