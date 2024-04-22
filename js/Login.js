let summit=document.getElementById('submitlogin');
let  success=document.getElementById('success');
let fail =document.getElementById('fail');
 // check for name and password to login 
let fnamelog=document.getElementById('fnamelog');
let lastname=document.getElementById('lastname');
let password=document.getElementById('pass');

console.log(window.localStorage.getItem("Data"))
let dta=window.localStorage.getItem("Data");

// console.log(dta[0])
if(dta!= null){
    dta=JSON.parse(dta);
dta.forEach((data) => {
    console.log(data)
    console.log(data["fname"]);
    console.log(data["lname"]);
    console.log(data["pass"]);
   
    summit.addEventListener('click',() => {
        console.log(fnamelog.value);
        console.log(lastname.value);
        console.log(password.value);
        if (data["fname"] == fnamelog.value && data["lname"] ==lastname.value && data["pass"] == password.value){
            success.style.display="block";
            success.innerHTML="Login Successfully!"
            window.location.replace(
                "file:///C:/Users/Dell/Documents/webprojects/AMIT/frontend/productswebsite/index.html#home",
              );
           
           }
           else {
            console.log("please write valid pass & email");
            fail.style.display="block";
            fail.innerHTML=" X Failed to login please Sign up ";

           }
    })
   
})}

// handle toggle bar 
const toggle=document.getElementsByClassName('toggle')[0];
const layer=document.getElementsByClassName('layer')[0]
console.log(toggle)
toggle.addEventListener('click',() => {
    console.log("welcome")
    layer.classList.toggle('tooglelayer');
    
})