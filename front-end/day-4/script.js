// console.log("hello");
function kmtomiles(){
    let km = window.prompt("Enter  the distance in kilometers");
    let miles=  km * 0.621371;
    document.getElementById("miles").textContent = km  + " km is equal to " + miles + " miles";

}


function kgtopounds(){
    let kg = window.prompt("Enter the weight in kilograms");
    let miles=  kg * 2.2;
    var m=document.getElementById("pounds");
    m.textContent = kg  + " km is equal to " + miles + " miles";

}

function mtocm(){
    let me = window.prompt("Enter the distance in metres");
    let miles=  me * 100;
    var m=document.getElementById("cm");
    m.textContent = me + " metre is equal to " + miles + " centimeter";


}

function SI(){
    let p = window.prompt("Enter the principal amount");
    let t = window.prompt("Enter the time period");
    let r = window.prompt("Enter the rate of interest");
    let si=(p*t*r)/100;
    var m=document.getElementById("si");
    m.textContent  = "Simple Interest is " + si ;


}
