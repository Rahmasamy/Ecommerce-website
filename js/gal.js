

window.onload = function() {
    var delayedDiv = document.querySelectorAll('.gal');
    let time=100;
    for (let i=0;i<delayedDiv.length;i++){
        delayedDiv[i].classList.add('show');
    }
    const img=document.getElementById("img1");
    
    img.addEventListener('click',function () {
        for (let i=0;i<delayedDiv.length;i++){
                console.log(delayedDiv[i])
                console.log(time)
                time=time+200;
                 setTimeout(function() {
                        // delayedDiv[i].style.position="none";
                        console.log(delayedDiv[i].style.position);
                        delayedDiv[i].style.position = 'relative';
                   
                   
                }, time); // Adjust the delay time in milliseconds (e.g., 2000 for 2 seconds)
    }
})

    // 
     //}  
    
  
};

