function addition_Function() {
    var addition = 8 + 8;
    document.getElementById("Math").innerHTML = "8 + 8 = " + addition;
}

function subtraction_Function() {
    var subtraction = 16 - 8;
    document.getElementById("Subtract").innerHTML = " 16 - 8 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 10 * 8;
    document.getElementById("Multiply").innerHTML = " 10 x 8 = " + multiplication;
}

function division_Function() {
    var division = 16 / 8;
    document.getElementById("divide").innerHTML = " 16 / 8 = " + division;
}

function more_Math() {
    var simple_Math = (3 + 4) * 10 / 2 - 3;
    document.getElementById("compute").innerHTML = "3 plus 4, multiplied by 10, divided in half and then subtracted by 3 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 11 % 5;
    document.getElementById("modulus").innerHTML = "When you divide 11 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var X = 10;
    document.getElementById("operand").innerHTML = -X;
}

var X = 5;
X++;
document.write(X);

var Y = 7.27 //Need reviewing//
Y--;
document.write(Y);

window.alert(Math.random());
window.alert(Math.random() * 100);

document.getElementById("sample").innerHTML = "<p><b>Math.E:</b> " + Math.E + "</p>" + "<p><b>Math.PI:</b>" + Math.PI + "</p>"

document.getElementById("method").innerHTML = "<p><b>Math.round:</b> " + Math.round(6.7) + "</p>" + "<p><b>Math.ceil:</b> " + Math.ceil(8.8) + "</p>"