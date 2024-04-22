// handle toggle bar 
const toggle2=document.getElementsByClassName('toggle')[0];
const layer2=document.getElementsByClassName('layer')[0]
// console.log(toggle);
toggle2.addEventListener('click',() => {
    console.log("welcome")
    layer2.classList.toggle('tooglelayer');
    
})
