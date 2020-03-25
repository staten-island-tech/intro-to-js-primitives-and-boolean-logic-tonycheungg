console.log("Connected");

//Lights//
let light = "lights"
if (light === "green") {
    console.log("Go");
} else if (light === "Yellow") {
    console.log("Caution");
} else {
    console.log("Stop");
}

//Kristy and Bao Bao

let kristyLactInt = false;
let baobaoLactInt = false;

if(kristyLactInt === true && baobaoLactInt == true) {
    console.log("Get Almond Milk");
} else if (kristyLactInt === true) || baobaoLactInt == true) {
    console.log("Get Both");
} else {
    console.log("Only Milk");
}

//Temperature
if(temp < 68){
    console.log("Too Cold")
} else if (temp >= 68 && temp <= 72) {
    console.log("Perfect");
} else if (temp >72 && temp <= 76){
    console.log("Is Warm");
} else{
    console.log("Too Hot")
}