// Handle submitting 
let summit=document.getElementById('submitreg');
console.log(summit)
summit.addEventListener('click',() => {
    document.getElementsByClassName('Register')[0].style.display="none";
    document.getElementById('reg').style.display="flex";
    // document.getElementById('regcont').style.display="block";
    document.getElementsByClassName('feedBack')[0].style.display="flex";
})
// handle Register
let obj={};
let allData=[];
let namee=document.getElementById('name');
let lname=document.getElementById('lname');
let phone=document.getElementById('phone');
let email=document.getElementById('email');
let pass=document.getElementById('pass');


if (window.localStorage.getItem("Data") !=null){
    allData=JSON.parse(window.localStorage.getItem("Data"));
    
 }
 else {
    console.log("error")
 }

summit.addEventListener('click',() => {
    let Data= {
        fname:namee.value,
        lname:lname.value,
        phone:parseInt(phone.value),
        email:email.value,
        pass:pass.value
      }
      allData.push(Data);
      window.localStorage.setItem("Data",JSON.stringify(allData))
      console.log(allData);
})

// handle toggle bar 
const toggle=document.getElementsByClassName('toggle')[0];
const layer=document.getElementsByClassName('layer')[0];
const hidden=document.querySelector(".layer2");
console.log(hidden);
// console.log(toggle);
// console.log(document.getElementsByClassName('Register')[0].style.display="none")
toggle.addEventListener('click',() => {
    console.log("welcome");
    if(document.getElementsByClassName('Register')[0].style.display == "none"){
       
        hidden.classList.toggle('togo');
        console.log(false)
    }
    else {
        layer.classList.toggle('tooglelayer');
        console.log(true);
    }
    
})