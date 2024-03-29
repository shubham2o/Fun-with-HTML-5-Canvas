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


// onmousedown and onmouseup event
function myMouseDown() {
    document.getElementById("onMDU").style.color = "black";
    document.getElementById("onMDU").style.backgroundColor = "red";
    document.getElementById("onMDU").style.fontSize = "24px";
}

function myMouseUp() {
    document.getElementById("onMDU").style.color = "black";
    document.getElementById("onMDU").style.backgroundColor = "yellow";
    document.getElementById("onMDU").style.fontSize = "16px";
}


// beginPath()
var f = document.getElementById("bP");
var ftx = f.getContext("2d");

ftx.beginPath();
ftx.lineWidth = "5";
ftx.strokeStyle = "green";
ftx.moveTo(0, 75);
ftx.lineTo(250, 75);
ftx.stroke();

ftx.beginPath();
ftx.strokeStyle = "purple";
ftx.moveTo(50, 0);
ftx.lineTo(150, 130);
ftx.stroke();


// moveTo()
var g = document.getElementById("mT");
var gtx = g.getContext("2d");

gtx.beginPath();
gtx.lineWidth = "5";
gtx.strokeStyle = "goldenrod";
gtx.moveTo(0, 0);
gtx.lineTo(300, 150);
gtx.stroke();


// lineTo()
var i = document.getElementById("lT");
var itx = i.getContext("2d");

itx.beginPath();
itx.lineWidth = "5";
itx.strokeStyle = "greenyellow";
itx.moveTo(0, 0);
itx.lineTo(300, 150);
itx.stroke();


// stroke()
var j = document.getElementById("stroke");
var jtx = j.getContext("2d");

jtx.beginPath();
jtx.lineWidth = "5";
jtx.strokeStyle = "olive";
jtx.moveTo(20, 20);
jtx.lineTo(20, 100);
jtx.lineTo(70, 100);
jtx.stroke();


// offsetX
function myOffsetX(event) {
    var k = event.offsetX;
    document.getElementById("demo").innerHTML = k;
}


// offsetY
function myOffsetY(event) {
    var l = event.offsetY;
    document.getElementById("demo1").innerHTML = l;
}


// strokeRect() Method
var m = document.getElementById("sRect");
var mtx = m.getContext("2d");
mtx.strokeRect(20, 20, 150, 100);


// createLinearGradient
// EXAMPLE 1
var n = document.getElementById("lG1");
var ntx = n.getContext("2d");

var grd1 = ntx.createLinearGradient(0, 0, 170, 0);
grd1.addColorStop(0, "black");
grd1.addColorStop(1, "white");

ntx.fillStyle = grd1;
ntx.fillRect(20, 20, 150, 100);


// EXAMPLE 2
var o = document.getElementById("lG2");
var otx = o.getContext("2d");
var grd2 = otx.createLinearGradient(0, 0, 0, 170);

grd2.addColorStop(0, "black");
grd2.addColorStop(1, "white");

otx.fillStyle = grd2;
otx.fillRect(20, 20, 150, 100);


// EXAMPLE 3
var p = document.getElementById("lG3");
var ptx = p.getContext("2d");

var grd3 = ptx.createLinearGradient(0, 0, 170, 0);
grd3.addColorStop(0, "black");
grd3.addColorStop(0.5, "red");
grd3.addColorStop(1, "white");

ptx.fillStyle = grd3;
ptx.fillRect(20, 20, 150, 100);


// addColorStop() Method
// EXAMPLE 1
var q = document.getElementById("aCS1");
var qtx = q.getContext("2d");

var grd4 = qtx.createLinearGradient(0, 0, 170, 0);
grd4.addColorStop(0, "black");
grd4.addColorStop(1, "white");

qtx.fillStyle = grd4;
qtx.fillRect(20, 20, 150, 100);


// EXAMPLE 2
var r = document.getElementById("aCS2");
var rtx = r.getContext("2d");

var grd5 = rtx.createLinearGradient(0, 0, 170, 0);
grd5.addColorStop(0, "black");
grd5.addColorStop("0.3", "magenta");
grd5.addColorStop("0.5", "blue");
grd5.addColorStop("0.6", "green");
grd5.addColorStop("0.8", "yellow");
grd5.addColorStop(1, "red");

rtx.fillStyle = grd5;
rtx.fillRect(20, 20, 150, 100);


// lineWidth
var s = document.getElementById("lW");
var stx = s.getContext("2d");
stx.lineWidth = 10;
stx.strokeRect(20, 20, 80, 100);


// HTML canvas font Property
var t = document.getElementById("font");
var ttx = t.getContext("2d");

ttx.font = "30px Arial";
ttx.fillText("Hello World", 10, 50);


// strokeText Method
var u = document.getElementById("sT");
var utx = u.getContext("2d");

utx.font = "20px Georgia";
utx.strokeText("Hello World", 10, 50);

utx.font = "30px Verdana";

var grd6 = utx.createLinearGradient(0, 0, u.width, 0);
grd6.addColorStop("0", "magenta");
grd6.addColorStop("0.5", "blue");
grd6.addColorStop("1.0", "red");

utx.strokeStyle = grd6;
utx.strokeText("Big Smile!", 10, 90);