var ul = document.querySelector(".navbar-nav");

var li1 = document.createElement("LI");
var li1_a = document.createElement("A");
li1.id = "li1";
li1_a.innerHTML = "Home";
li1.classList.add("nav-item");
li1_a.classList.add("nav-link");
li1_a.href = "https://everyone-ide.github.io/";
ul.appendChild(li1);
var li1 = document.getElementById("li1");
li1.appendChild(li1_a);

var li2 = document.createElement("LI");
var li2_a = document.createElement("A");
li2.id = "li2";
li2_a.innerHTML = "Download";
li2.classList.add("nav-item");
li2_a.classList.add("nav-link");
li2_a.href = "https://everyone-ide.github.io/download";
ul.appendChild(li2);
var li2 = document.getElementById("li2");
li2.appendChild(li2_a);

var li3 = document.createElement("LI");
var li3_a = document.createElement("A");
li3.id = "li3";
li3_a.innerHTML = "News";
li3.classList.add("nav-item");
li3_a.classList.add("nav-link");
li3_a.href = "https://everyone-ide.github.io/news";
ul.appendChild(li3);
var li3 = document.getElementById("li3");
li3.appendChild(li3_a);
