const prompt = require("prompt-sync")({ sigint: true });
//Challenge one: Student Grade Generator
// Prompt for marks to be entered.
let points = prompt("please enter your marks: ");
//If points are more or equal to 79 thats a Grade A
if (points >= 79 && points <= 100) {
    console.log("A")
    //If points are greater or equal to 60 but less than 79 thats a Grade B
} else if (points >=60 && points < 79) {
    console.log("B")
    //If points are greater than 49 but less or equal to 59 thats a Grade C
} else if (points > 49 && points <= 59) {
    console.log("C")
    //If points are greater or equal to 40 but less or equal to 49 thats a Grade D
} else if (points >=40 && points <= 49) {
    console.log("D")
//If points are greater or equal to less than 40 thats a Grade E
} else if (points < 40 && points >= 0) {
    console.log("E")
    // anything that is not in the range of 0 to 100 is invaled
} else {
    console.log("invalid")
}


