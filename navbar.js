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

var li4 = document.createElement("LI");
var li4_a = document.createElement("A");
li4.id = "li4";
li4_a.innerHTML = "Chat";
li4.classList.add("nav-item");
li4_a.classList.add("nav-link");
li4_a.href = "https://everyone-ide.github.io/chat";
ul.appendChild(li4);
var li4 = document.getElementById("li4");
li4.appendChild(li4_a);

var li5 = document.createElement("LI");
var li5_a = document.createElement("A");
li5.id = "li5";
li5_a.innerHTML = "Contact";
li5.classList.add("nav-item");
li5_a.classList.add("nav-link");
li5_a.href = "https://everyone-ide.github.io/contact";
ul.appendChild(li5);
var li5 = document.getElementById("li5");
li5.appendChild(li5_a);

var li6 = document.createElement("LI");
var li6_a = document.createElement("A");
li6.id = "li6";
li6_a.innerHTML = "Terms of Service";
li6.classList.add("nav-item");
li6_a.classList.add("nav-link");
li6_a.href = "https://everyone-ide.github.io/tos";
ul.appendChild(li6);
var li6 = document.getElementById("li6");
li6.appendChild(li6_a);

var li7 = document.createElement("LI");
var li7_a = document.createElement("A");
li7.id = "li5";
li7_a.innerHTML = "Privacy Policy";
li7.classList.add("nav-item");
li7_a.classList.add("nav-link");
li7_a.href = "https://everyone-ide.github.io/privacy";
ul.appendChild(li7);
var li7 = document.getElementById("li7");
li7.appendChild(li7_a);
