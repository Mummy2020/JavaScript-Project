function call_Loop() { //Loop function
    var Digit = ""; //This code digit
    var X = 1; //Setting varial x to 1
    while (X < 11) { // setting condition for how many numbers will print
        Digit += "<br>" + X;//This code will write the numbers down to the next line
        X++; //This code is an increment 
    }
    document.getElementById("loop").innerHTML = Digit;//Will print the result of the loop function
}

function length_Property() {//Length function
    var text = "Hello World! here I am!";//Setting variable the value text
    var length = text.length;//This sets the character length to the variable text
    document.getElementById("length").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {//for loop function
    for (Y = 0; Y < Instruments.length; Y++) {//Setting the condition for the increment of the length
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {//Array function
    var Cat_Picture = [];
    Cat_Picture[0] = "Sleeping";//Setting the list variable and the value
    Cat_Picture[1] = "playing";//Setting the list variable and the value
    Cat_Picture[2] = "eating";//Setting the list variable and the value
    Cat_Picture[3] = "purring";//Setting the list variable and the value
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + " . ";
} 

function constant_Function() {//Contatant function
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};//Setting musical instrument variable and the value
    Musical_Instrument.color = "blue";//Setting color property to blue
    Musical_Instrument.price = "$900";//Setting the price property to the value 900
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 99;//this code is global variable
document.write(X);
{
    let X = 44;//this code is a block function, it cannot be accessed out side of the function block
    document.write("<br>" + X);
}
document.write("<br>" + X + "<br>");

var X = 99;//This is global variable
document.write(X);
{
    var  X = 44;//This is a global variable it is accessible 
    document.write("<br>" + X);
}
document.write("<br>" + X + "<br>" + "<br>");

function multiplication_Function(a,b) { //This code is a return statement 
    return a * b;//This code returns the result of the function
}
document.getElementById("demo").innerHTML = multiplication_Function(5, 4);//Sets the argument for the function

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
  document.getElementById("car_object").innerHTML = car.description();

 for (i = 0; i < 10; i++) {//This is a for loop, setting condition for when i eaquals 0 and less than 10
    if (i ===4 || i === 3) {//nested if statement for a continue condition
        continue;
    }
    document.write(i + "<br>");
    if (i === 7) {//if statement for a breakout condition
        break;
    }

  }
  document.write("I have broken out of the loop")

  const width = 3;
  const height = 4;

  for (let x = 1; x <= width; x++) {
    for (let y = 1; y <= height; y++) {
        if (x === 2 && y === 2) {
            break;
        }
        console.log('${x},${y}');
    }
  }