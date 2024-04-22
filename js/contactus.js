// Handle submitting 
let summit=document.getElementById('submitcontact');
console.log(summit)
summit.addEventListener('click',() => {
  

    document.getElementsByClassName('contactus')[0].style.display="none";
    document.getElementById('con').style.display="flex";
    document.getElementsByClassName('feedBack')[0].style.display="flex";
})

// handle toggle bar 
const toggle=document.getElementsByClassName('toggle')[0];
const layer=document.getElementsByClassName('layer')[0];
const hidden=document.querySelector(".layerc");
console.log(hidden);
// console.log(toggle);
// console.log(document.getElementsByClassName('Register')[0].style.display="none")
toggle.addEventListener('click',() => {
    console.log("welcome");
    if(document.getElementsByClassName('contactus')[0].style.display == "none"){
       
        hidden.classList.toggle('togo');
        console.log(false)
    }
    else {
        layer.classList.toggle('tooglelayer');
        console.log(true);
    }
    
})