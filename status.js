var div = document.getElementById("status-div");

var p = document.createElement("P");
p.id = "status-p";
p.classList.add("lead");
p.innerHTML = "The CEO is currently fixing a bug on the News page.";
div.appendChild(p);
