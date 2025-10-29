document.getElementById("1").innerHTML = "*pizza n sprinkles";
document.getElementById("2").innerHTML = "*gelato and gyro";
document.getElementById("3").innerHTML = "look in front?";
document.getElementById("4").innerHTML = "red fireman's box";
document.getElementById("5").innerHTML = "blue styled beads";
document.getElementById("6").innerHTML = "<strong>cany you solve the riddle?</strong>";
var explosion = 0;
function change_text(){
if(explosion == 0){
explosion = explosion+1
document.getElementById("1").innerHTML = "Red and brown hairclip";
document.getElementById("2").innerHTML = "shower cap";
document.getElementById("3").innerHTML = "green n yellow bunny";
document.getElementById("4").innerHTML = "rubber on glass";
document.getElementById("5").innerHTML = "stained glass window";
document.getElementById("6").innerHTML = "can you solve <strong>this</strong> riddle?";
}
else if(explosion == 1){
    location.replace("explosion.png");
}
}
