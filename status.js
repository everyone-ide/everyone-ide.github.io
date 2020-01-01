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

var hr3 = document.createElement("HR");
hr3.id = "status-hr3";
hr3.classList.add("my-4");
div.appendChild(hr3);

var p2 = document.createElement("P");
p2.id = "status-p2";
p2.classList.add("lead");
p2.innerHTML = "-";
div.appendChild(p2);

var hr4 = document.createElement("HR");
hr4.id = "status-hr4";
hr4.classList.add("my-4");
div.appendChild(hr4);

var hr5 = document.createElement("HR");
hr5.id = "status-hr5";
hr5.classList.add("my-4");
div.appendChild(hr5);

var p3 = document.createElement("P");
p3.id = "status-p3";
p3.classList.add("lead");
p3.style = "color: #737373;";
p3.innerHTML = "Both developers doing nothing.";
div.appendChild(p3);

var hr6 = document.createElement("HR");
hr6.id = "status-hr6";
hr6.classList.add("my-4");
div.appendChild(hr6);
