// Challenge 2; Speed detector
let speed = prompt("input speed of car")
if (speed <= 70) {
    console.log ("Ok")
} else if (speed - 70) {
    let points = (speed - 70) / 5;
    if (points <= 12) {
        console.log (`points:${points}`);
    } else {
        points > 12
        console.log("license suspended")
    }

}