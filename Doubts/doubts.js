// innerWidth
// EXAMPLE 1
let w = window.innerWidth;
let h = window.innerHeight;

document.getElementById("winWidth").innerHTML = "Width : " + w + "<br>Height : " + h;


// EXAMPLE 2
let text =
    "<p>innerWidth : " + window.innerWidth + "</p>" +
    "<p>innerHeight : " + window.innerHeight + "</p>" +
    "<p>outerWidth : " + window.outerWidth + "</p>" +
    "<p>outerHeight : " + window.outerHeight + "</p>";

document.getElementById("hW").innerHTML = text;


// strokeStyle
// EXAMPLE 1
var c = document.getElementById("strStyle");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#FF0000";
ctx.strokeRect(20, 20, 150, 100);


// EXAMPLE 2
var a = document.getElementById("strStyle1");
var atx = a.getContext("2d");

var gradient = atx.createLinearGradient(0, 0, 170, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");

atx.strokeStyle = gradient;
atx.lineWidth = 5;
atx.strokeRect(20, 20, 150, 100);


// EXAMPLE 3
var b = document.getElementById("strStyle2");
var btx = b.getContext("2d");

btx.font = "30px Verdana";

var gradient1 = btx.createLinearGradient(0, 0, b.width, 0);
gradient1.addColorStop("0", "magenta");
gradient1.addColorStop("0.5", "blue");
gradient1.addColorStop("1.0", "red");

btx.strokeStyle = gradient1;
btx.strokeText("Big Smile!", 10, 50);


// lineJoin Property
// EXAMPLE 1
var d = document.getElementById("lJ1");
var dtx = d.getContext("2d");
dtx.beginPath();
dtx.lineWidth = 10;
dtx.lineJoin = "round";
dtx.moveTo(20, 20);
dtx.lineTo(100, 50);
dtx.lineTo(20, 100);
dtx.stroke();


// lineCap Property
// EXAMPLE 1
var e = document.getElementById("lC1");
var etx = e.getContext("2d");

etx.beginPath();
etx.lineWidth = 10;
etx.lineCap = "butt";
etx.moveTo(20, 20);
etx.lineTo(200, 20);
etx.stroke();

etx.beginPath();
etx.lineCap = "round";
etx.moveTo(20, 40);
etx.lineTo(200, 40);
etx.stroke();

etx.beginPath();
etx.lineCap = "square";
etx.moveTo(20, 60);
etx.lineTo(200, 60);
etx.stroke();


// Difference between the onmousemove, onmouseenter and mouseover events: -- >
var x = 0,
    y = 0,
    z = 0;

function myMoveFunction() {
    document.getElementById("onMM").innerHTML = z += 1;
}

function myEnterFunction() {
    document.getElementById("onME").innerHTML = x += 1;
}

function myOverFunction() {
    document.getElementById("onMO").innerHTML = y += 1;
}


// Difference between the onmouseleave and onmouseout events :
function myLeaveFunction() {
    document.getElementById("onML").innerHTML = x += 1;
}

function myOutFunction() {
    document.getElementById("onMOut").innerHTML = y += 1;
}