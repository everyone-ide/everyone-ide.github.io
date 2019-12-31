var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById("li4");
var li5 = document.getElementById("li5");
var li6 = document.getElementById("li6");
var li7 = document.getElementById("li7");
var li8 = document.getElementById("li8");

function benefitsScroll(){
  document.getElementById('benefits').scrollIntoView({behavior: 'smooth'});
}
function downloadScroll(){
  document.getElementById('download').scrollIntoView({behavior: 'smooth'});
}
function aboutScroll(){
  document.getElementById('about').scrollIntoView({behavior: 'smooth'});
}
function teamScroll(){
  document.getElementById('team').scrollIntoView({behavior: 'smooth'});
}
function connectScroll(){
  document.getElementById('connect').scrollIntoView({behavior: 'smooth'});
}
function newsScroll(){
  document.getElementById('news').scrollIntoView({behavior: 'smooth'});
}
function makeActiveNav(li){
  li.classList.add("active");
}
