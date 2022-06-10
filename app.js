console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//let n = prompt("Where would we like to count to?")

function printOdds(count){
     for (let i = 1; i<= count; i++){
         if (i%2 !=0){
             console.log(i)
         }
     }
}
printOdds(prompt("Where should I count to?"))

//}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
age = prompt("how old are you?")
Name = prompt("What's your name?")
function checkAge(age){
    let aboveSixteen = `Thank you ${Name}, you can drive!`
    let belowSixteen = `Sorry ${Name}, but you need to wait until you're 16.`
    if (age >= 16){
        console.log(aboveSixteen)
        alert(aboveSixteen)
    } else {
        console.log(belowSixteen)
        alert(belowSixteen)
    }
}
checkAge(age)

// Exercise 3

function where(x,y){
    if (x>0 && y>0){
        console.log("These quardinates are in plane 1")
    } else (x<0 && y<0){
        console.log("These quardinates are in plane")
    }
}

// Exercise 4


// Exercise 5