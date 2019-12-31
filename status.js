var div = document.getElementById("status-div");

var i = document.createElement("I");
i.id = "status-i"
i.classList.add("fas fa-ban")
i.style = "width: 15px; height: 15px; color: red;"
div.appendChild(i);

// fas fa-ban - No status available. - red
// fas fa-laptop-code - Adding new feature. - lightblue
// fas fa-bug - Fixing bugs. - green

var p = document.createElement("P");
p.id = "status-p";
p.classList.add("lead");
p.innerHTML = "No status available.";
div.appendChild(p);
