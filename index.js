let add=document.getElementById('add');
let sub= document.getElementById('sub');
let count=0;
let p= document.getElementById('p');
let clearButton=document.getElementById('clear-button');
add.addEventListener('click',function(){
    count++;
    p.innerText=count;
})
sub.addEventListener('click',function(){
    count--;
    p.innerText=count;
})
clearButton.addEventListener('click',function(){
    count=0;
    p.innerText=count;
})