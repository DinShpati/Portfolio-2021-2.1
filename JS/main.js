AOS.init();
//Animated reveal text 
window.onload = function(){
    var tl = new TimelineLite({delay: 2.5}),
      firstBg = document.querySelectorAll('.text__first-bg'),
      secBg = document.querySelectorAll('.text__second-bg'),
      word  = document.querySelectorAll('.text__word');
    
    tl
      .to(firstBg, 0.2, {scaleX:1})
      .to(secBg, 0.2, {scaleX:1})
      .to(word, 0.1, {opacity:1}, "-=0.1")  
      .to(firstBg, 0.2, {scaleX:0})
      .to(secBg, 0.2, {scaleX:0});
    
    //document.querySelector('.restart').onclick = function() {tl.restart()};
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}
openCity(event, 'all');


// Mobile Navigation
