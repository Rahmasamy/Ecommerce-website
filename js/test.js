
window.addEventListener("scroll", function () {
  let setionloaction = document.getElementById("test-cont");
  var section2Rect = setionloaction.getBoundingClientRect();

  // Check if the top of section2 is within the viewport
  if (section2Rect.top >= 0 && section2Rect.top <= window.innerHeight) {
    var smalltest = document.querySelectorAll(".testmin");
    let time = 1700;
    for (let i = 0; i < smalltest.length; i++) {
      time = time + 500;
      setTimeout(function () {
        smalltest[i].classList.add("appear");
      }, time); //
    }
  }
});


