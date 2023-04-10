document.write("10" + 8); //This code adds 8 to 10m making it 108//

function nan_Function() {
    document.getElementById("nan").innerHTML = 0/0; //This code displays NaN on the screen because you cannot divide by 0//
}

document.getElementById("string").innerHTML = isNaN("I love Pizza!") // This code displays true on the screen because it is a string//
document.getElementById("isnumber").innerHTML = isNaN("89") // This code displays false on the screen because it is a number//

function my_Function() {
    var X = 2E310;
    document.getElementById("sample").innerHTML = X; //This code will display infinty on the screen because it is higher than our maximum floating number// 
}

function test_Function() {
   var  Y= -3E310;
    document.getElementById("test").innerHTML = Y; //This code will display a negative infinity//
}

document.write("<br>") //This is a break so that the code can jump down to the next line//

document.write(10 > 5); //This code compares two numbers. If the comparison is true, it will print true on the screen and if it is false it will display that on the screen //
document.write("<br>"); //This is a break so that the code can jump down to the next line//
document.write(5 > 10); //This code compares two numbers. If the comparison is true, it will print true on the screen and if it is false it will display that on the screen //
console.log(8 + 9); //This code print the result on console//
console.log(10 > 22) //This code compares two numbers and print the result on console//
document.write("<br>"); //This is a break so that the code can jump down to the next line//
document.write(15 == 15); //This code compares two numbers. If the comparison is true, it will print true on the screen and if it is false it will display that on the screen //
document.write("<br>"); //This is a break so that the code can jump down to the next line//
document.write(8 == 10); //This code compares two numbers. If the comparison is true, it will print true on the screen and if it is false it will display that on the screen //
document.write("<br>"); //This is a break so that the code can jump down to the next line//
X = 20;
Y = 20;
document.write(X === Y); //This code compares if two data type are equal//
document.write("<br>"); //This is a break so that the code can jump down to the next line//
X = 40;
Y = "44";
document.write(X === Y); //This code shows the different numbers and  different data type//
document.write("<br>"); //This is a break so that the code can jump down to the next line//
X = 33;
Y = "33";
document.write(X === Y);
document.write("<br>"); //This is a break so that the code can jump down to the next line//
X = 9;
Y = 10;
document.write(X === Y);
document.write("<br>"); //This is a break so that the code can jump down to the next line//
document.write(10 > 5 && 3 < 6); //This is boolean logic comparing two number stes//
document.write("<br>");  //This is a break so that the code can jump down to the next line//
document.write(6 > 2 && 3 > 8);
document.write("<br>"); //This is a break so that the code can jump down to the next line//
document.write(8 < 11 || 4 > 6);
document.write("<br>"); //This is a break so that the code can jump down to the next line//
document.write(7 < 3 || 3 < 2);
document.write("<br>"); //This is a break so that the code can jump down to the next line//
function not_Function() {
    document.getElementById("Not").innerHTML = !(13 > 5); //This is a NOT boolean and it displays true on the screen//
}

function the_Function() {
    document.getElementById("No").innerHTML = !(6 > 8); //This is a NOT boolean and it displayed true on the screen//
}