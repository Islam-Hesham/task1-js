
//Write a program that allow to user enter number then printit
var number = parseInt(prompt("enter your number"));
document.getElementById("num").innerHTML = number;
//Write a program that take number from user then print yes if that number can divide by 3 
//and 4 otherwise print n
var numDivide = parseInt(prompt("enter your num if divide/3"));


if (numDivide % 3 == 0) {
    document.getElementById("numdivide").innerHTML = numDivide + " yes can divide";
}
//Write a program that allows the user to insert 2 integers then print the manum1
var x = parseInt(prompt("entr num x"));
var y = parseInt(prompt("entr num y"));
var z = parseInt(prompt("entr num z"));
if (x > y) {
    document.getElementById("max").innerHTML = x + " is max number";


}
else {
    document.getElementById("max").innerHTML = y + " is max number";

}

//switch - Write a program to find maximum between two numbers
switch (x>y) {
    case 0:
        document.getElementById("switch-max").innerHTML = y + " is max number";
        
        break;

    case 1:
        document.getElementById("switch-max").innerHTML = x + " is max number";
        break;
}
//Write a program that allows the user to insert an integer then print negative if it is
//negative number otherwise print positiv
if (x > 0) {
    document.getElementById("NorP").innerHTML = x + " x is positive number";


}
else if (x < 0) {
    document.getElementById("NorP").innerHTML = x + "  x is negative number";
}

else {
    document.getElementById("NorP").innerHTML = x + "  x is zero";

}

//Write a program that allows the user to insert integer number then
//check If a number is oven or odd
if (x % 2 == 0) {
    document.getElementById("even").innerHTML = x + "  x is even number";
}
else {
    document.getElementById("odd").innerHTML = x + "  x is odd number";
}

switch (x%2) {
    case 0:
document.getElementById("switch_even").innerHTML = x + "  x is even number";

break;

  case 1:

document.getElementById("switch_even").innerHTML = x + "  x is odd number";

break;
        }



//Write a program that take 3 integers from user then print the max element
//and the min element.
var w = Math.max(x, y, z);
document.getElementById("maxYxZ").innerHTML = w + "   is max number";


// Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
//then print vowel otherwise print consonant

var ch = prompt("enter char")
if (ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
    document.getElementById("vowel").innerHTML = "   vowel";

}
else {
    document.getElementById("vowel").innerHTML = "   Consonant";

}
//switch

switch (ch) {
    case "A":
    case "E":
    case"I":
    case"O":
    case"U":
        document.getElementById("switch-vowel").innerHTML = "   vowel";
        
        break;

    default:
        document.getElementById("switch-vowel").innerHTML = "   Consonant";

        break;
}


//Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
//that’s number
for (var i = 1; i <= x; i++) {
    console.log(i);
}

//Write a program that allows userto insert integerthen print a multiplication table up to 12
for (var i = 1; i <= y; i++) {
    console.log(y * i);
}
//12- Writeaprogramthattaketwointegersthenprintthepower
var k = x * y;
document.getElementById("power").innerHTML = k;

//- Write a program to enter marks of five subjects and calculate total, average and
//percentage.

var Physics = parseInt(prompt("Physics"));
var Chemistry = parseInt(prompt("Chemistry"));
var Biology = parseInt(prompt("Biology"));
var Mathematics = parseInt(prompt("Mathematics"));
var Computer = parseInt(prompt("Computer"));
var total = Physics + Chemistry + Biology + Mathematics + Computer;
var Average_Marks = total / 5;

var percentage = (total / 1000) * 100;



document.getElementById("total-subjects").innerHTML = total;
document.getElementById("Average-subjects").innerHTML = Average_Marks;
document.getElementById("percentage-subjects").innerHTML = percentage;


//Write a program to create Simple Calculator

var num1 = parseInt(prompt("enter num1"));
var num2 = parseInt(prompt("enter num2"));
var operator = prompt('Enter operator ( either +, -, * or / ): ');
var result;
console.log(num1);
console.log(num2);

switch (operator) {
    case '+':
        result = num1 + num2;
        console.log(result);
        break;

    case '-':
        result = num1 - num2;
        console.log(result);
        break;

    case '*':
        result = num1 * num2;
        console.log(result);
        break;

    case '/':
        result = num1 / num2;
        console.log(result);
        break;

    default:
        console.log('Invalid operator');
        break;
}
//Write a program to check whether a number is positive or negative or zero
switch (y > 0) {
    case 1:
        console.log("Positive number ");

        switch (y < 0) {
            case 1:
                console.log("Negative number ");


                break;

            case 0:
                console.log("Zero number ");


        }
        break;
}
//

var percentage = (total / 200) * 100;

if (percentage >= 90) {
    document.getElementById("grade").innerHTML = "Grade : A";

}

else if (percentage >= 80) {
    document.getElementById("grade").innerHTML = "Grade : B";
}
else if (percentage >= 70) {
    document.getElementById("grade").innerHTML = "Grade : C";
} else if (percentage >= 60) {
    document.getElementById("grade").innerHTML = "Grade : D";
} else if (percentage >= 40) {
    document.getElementById("grade").innerHTML = "Grade : e";
}
else {
    document.getElementById("grade").innerHTML = "Grade : F";
}



//Write a program to input month number and print number of days in that
//month.
var month = parseInt(prompt("enter-month"));
if (month == 1 || month == 3 || month == 5
    || month == 7 || month == 8 || month == 10
    || month == 12) {
    document.getElementById("monthh").innerHTML = "31 Days";
}

// Check for 30 Days
else if (month == 4 || month == 6
    || month == 9 || month == 11) {
    document.getElementById("monthh").innerHTML = "30 Days";

}

// Check for 28/29 Days
else if (month == 2) {
    document.getElementById("monthh").innerHTML = "29/28 Days";
}


// Else Invalid Input
else {
    document.getElementById("monthh").innerHTML = "Invalid Month.s";


}

//Using switch case*******************************
//15 - Write a program to print total number of days in month

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 12:
    case 10:
        document.getElementById("switch-monthh").innerHTML = "31 Days";

        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.getElementById("switch-monthh").innerHTML = "30 Days";

    default:
    case 2:
        document.getElementById("switch-monthh").innerHTML = "28/29 Days";


        break;
        document.getElementById("switch-monthh").innerHTML = "Something went wrong.";
}
