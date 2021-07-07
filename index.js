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

//challenge 1

let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa",
"Richard"];
let less5 = students.filter(function(five){
    return five.length >= 5
})
console.log(lessthan5)
/*Using the above array filter out all students whose names contain
less than 5 characters*/

//challenge 2


let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa",
"Richard"];
console.log(students.includes("Junshen"))
function namecheck(string){
    students.includes("Savva", "Alan")
}
console.log(students.some(namecheck))

/*Using the above array check to see if the array “includes” “junshen”
Write a seperate function to check if “Alan” or “Savva” were included
in “some” of the array
USE MDN to find the appropriate array methods*/
