var div = document.getElementById("status-div");

var hr = document.createElement("HR");
hr.id = "status-hr";
hr.classList.add("my-4");
div.appendChild(hr);

var i = document.createElement("I");
i.id = "status-i";
i.classList.add("fas");
i.classList.add("fa-ban");
i.style = "width: 50px; height: 50px; color: red;";
div.appendChild(i);

// fas fa-ban - No status available. - red
// fas fa-laptop-code - Adding new feature. - lime
// fas fa-bug - Fixing bugs. - green

var p = document.createElement("P");
p.id = "status-p";
p.classList.add("lead");
p.innerHTML = "No status available.";
div.appendChild(p);

var hr2 = document.createElement("HR");
hr2.id = "status-hr2";
hr2.classList.add("my-4");
div.appendChild(hr2);

var p2 = document.createElement("P");
p2.id = "status-p2"
p2.classList.add("lead");
p2.style = "color: #737373;";
p2.innerHTML = "The CEO is currently polishing the site with more fontawesome icons.";
div.appendChild(p2);

var hr3 = document.createElement("HR");
hr3.id = "status-hr3"
hr3.classList.add("my-4");
div.appendChild(hr3);
