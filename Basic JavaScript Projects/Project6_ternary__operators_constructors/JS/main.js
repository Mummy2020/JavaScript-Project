function ride_Function() { //This is a ternary function//
    var Height, Can_ride; //This code assigns a variable//
    Height = document.getElementById("Height").value; //This code assigns variable height to value 52 centimeters"
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough"; // this code examines the conditions height < 52 and it will display left string or right string on the screen//
    document.getElementById("Ride").innerHTML = Can_ride + " to ride"; //This code will dispaly the result of the conditional statement put above//
}

function vote_Function() { //This is a ternary function//
    var Age, Can_vote; //This code assign a variable//
    Age = document.getElementById("Age").value; //This code assigns variable age to value 18"
    Can_vote = (Age < 18) ? "You are not old enough": "You are qualify"; // this code examines the conditions Age < 18 and it will display left string or right string on the screen//
    document.getElementById("Vote").innerHTML = Can_vote + " to vote"; //This code will dispaly the result of the conditional statement put above//
}


function Vehicle(Make, Model, Year, Color) { //This is a class contructor function//
    this.Vehicle_Make = Make; //This is an object that possess the Vehicle function//
    this.Vehicle_Model = Model; //This is an object that possess the Vehicle function//
    this.Vehicle_Year = Year; //This is an object that possess the Vehicle function//
    this.Vehicle_Color = Color; //This is an object that possess the Vehicle function//
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //This code creates an object of Vehicle function//
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //This code creates an object of Vehicle function//
var Erik = new Vehicle("Ford", "Pinto", 1970, "Mustard"); //This code creates an object of Vehicle function//
function myFunction() {
    document.getElementById("keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +" manufactured in " + Erik.Vehicle_Year;
}

function Phone(Make, Model, Year, Color) {
    this.Phone_Make = Make; //This is an object that possess the Vehicle function//
    this.Phone_Model = Model; //This is an object that possess the Vehicle function//
    this.Phone_Year = Year; //This is an object that possess the Vehicle function//
    this.Phone_Color = Color; //This is an object that possess the Vehicle function//
}
var Bryan = new Phone("Iphone", 12, 2021, "Blue"); //This code creates an object of Phone function//
var Akyra = new Phone("Samsung", "S23", 2023, "Gray"); //This code creates an object of Phone function//
var Bob = new Phone("Nokia", 3310, 2000, "Black"); //This code creates an object of Phone function//
function phone_Function() {
    document.getElementById("Constructor").innerHTML = "Bryan has a " + Bryan.Phone_Color + " "+  Bryan.Phone_Make  + " "+  Bryan.Phone_Model + " manufatured in " + Bryan.Phone_Year
}

function Person(First, Last, Age, Eye) { //Perosn constructor function
    this.FirstName = First;
    this.LastName = Last;
    this.Age = Age;
    this.EyeColor = Eye;

}
const myFather = new Person("Jordan", "Johnson", 56, "red"); //This code creates a person object
document.getElementById("demo").innerHTML = "My father is " + myFather.Age + " years old"; //This will display age on tyhe screen

function counting_Function() {
    document.getElementById("Math").innerHTML = count();
    function count() {
        var Starting_Point = 44;
        function Plus_one() {Starting_Point += 1;}
        Plus_one();
        return Starting_Point;
    }
}