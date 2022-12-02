const prompt = require("prompt-sync")({ sigint: true });
// Challenge 2; Speed detector
let speed = prompt("input speed of car: ")
// If speed is less or equal to 70 it should print Ok.
if (speed <= 70) {
    console.log ("Ok")
//For every 5km's above 70, it should print one demerit point.
} else if (speed - 70) {
    let points = (speed - 70) / 5;
    if (points <= 12) {
        console.log (`points:${points}`);
 //If demerit points are more than twelve, it should print license suspended.
    } else {
        points > 12
        console.log("license suspended")
    }

}