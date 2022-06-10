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
    if ( x >0 && y > 0){
        return "These coordinates are in plane I"
    } else if (x < 0 && y > 0){
        return "These coordinates are in plane II"
    } else if ( x <0 && y < 0) {
        return "These coordinates are in plane III"
    }  else if (x >0 && y<0) {
        return "These coordinates are in plane IV"
    } 
}
console.log(where(prompt("Give me a point with x&y")))
// Exercise 4
function val(a, b, c){
    return a + b > c && a + c > b && b+ c > a;
}

function chktri(a, b, c){
    let isVal = val(a, b, c);
    if (isVal) {
        if (a == b && b == c){
            return "Eq";
        } else if (a ==b || b == c || a == c){
            return "Isos";
        } else {
            return "Scalene"
        }
    }
}

// Exercise 5
function dataUsage(planLimit, day, usage){
    let periodLength = 30;
    let average = usage / day;
    let projav = planLimit / periodLength;
    let rem = planLimit - usage;
    let remD = periodLength - day
    let proU = rem * average
    let status;
    let stat2
    console.log(`${day} days used, ${periodLength - day} days remaining`);
    console.log(` Average daily use:${usage / day} GB/day`);
    if (average > projav){
        status = "Exceeding";
        stat2 ="High";
    } else if (average < projav){
        status = "Below";
        stat2 = "";
    } else {
        status = "At";
        stat2 = "";
    }
  console.log(`You are ${status} your average daily use (${average} GB/day),
  continuing this ${stat2} usage, you'll exceed your data plan by
  ${planLimit - (usage + proU)} GB.
  To stay below your data plan, use no more than ${rem / remD} GB/day.`)
    
}
console.log(dataUsage(30, 17, 5))