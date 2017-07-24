function ret(){
var lancer = Math.floor((Math.random() * 6) + 1)
document.getElementById("temp1").innerHTML= lancer;

 if (lancer===1)
{document.getElementById('dé').innerHTML= '<img src="images/dice-1.png">'
document.getElementById("current1").innerHTML = Number(0)}
if (lancer===2)
{document.getElementById('dé').innerHTML= '<img src="images/dice-2.png">'
document.getElementById("current1").innerHTML = Number(document.getElementById("current1").innerHTML) + parseInt(lancer)}
if (lancer===3)
{document.getElementById('dé').innerHTML= '<img src="images/dice-3.png">'
document.getElementById("current1").innerHTML = Number(document.getElementById("current1").innerHTML) + parseInt(lancer)}
if (lancer===4)
{document.getElementById('dé').innerHTML= '<img src="images/dice-4.png">'
document.getElementById("current1").innerHTML = Number(document.getElementById("current1").innerHTML) + parseInt(lancer)
}
if (lancer===5)
{document.getElementById('dé').innerHTML= '<img src="images/dice-5.png">'
document.getElementById("current1").innerHTML = Number(document.getElementById("current1").innerHTML) + parseInt(lancer)}
if (lancer===6)
{document.getElementById('dé').innerHTML= '<img src="images/dice-6.png">'
document.getElementById("current1").innerHTML = Number(document.getElementById("current1").innerHTML) + parseInt(lancer)}
}
