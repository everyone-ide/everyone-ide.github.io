var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");

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
