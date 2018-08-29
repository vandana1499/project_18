var place=document.getElementById('Place');
var time =document.getElementById('Time');
var title=document.getElementById('title');
var placeBox=document.getElementsByClassName('place')[0];
var timeBox=document.getElementsByClassName('time')[0];
var info=document.getElementById('info');
var  submit=document.getElementById('submit');
var f1=document.getElementById('f1');



 place.addEventListener('change',()=>{

   timeBox.style.display="none";
    placeBox.style.display="block";

 });
 time.addEventListener('change',()=>{


    timeBox.style.display="block";
    placeBox.style.display="none";
 });

 submit.addEventListener('submit',()=>{


    
 });





