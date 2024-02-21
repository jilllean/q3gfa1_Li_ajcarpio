var nickname = "Karen";
var height = 62;
var weight = 50;

var heightft = Math.floor(height / 12); 
var heightin = height % 12;
height = heightft + "'" + heightin + '"' ;
weight = weight * 2.20462262;

alert("Name: " + nickname + "\nHeight: " + height + "\nWeight: " + weight.toFixed(3) + " lbs");