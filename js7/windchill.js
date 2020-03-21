
function windChill(){

var temp = 69;
var windspeed = 3;

if(temp <= 50 && windspeed >= 9) {

    let mathstuff = 35.74 + (0.6215*temp) - (35.75*(windspeed**0.16)) + (0.4275*temp*(windspeed**0.16));
    
    document.getElementById("windchill").innerText = mathstuff.toFixed(2);
} else {
   document.getElementById("windchill").innerHTML = "N/A"; 
}
}