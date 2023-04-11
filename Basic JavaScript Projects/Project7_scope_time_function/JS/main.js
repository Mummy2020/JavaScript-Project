var X = 14; //Global variable
function add_Function() { 
    var Y = 23; //Local variable
    document.write(20 + X + Y + "<br>");//Adding global variable, local variable and a number
}
add_Function(); //This code prints the result of the function above 

function add_numbers_Function() {
    console.log(20 + X + Y);//Trying to add a number to local and global variable. however this will display undefine on the console as local variable is not accessible to this function
}
add_numbers_Function();//This code prints the result of the function above

function get_Date() {//Date function
    if (new Date().getHours() < 23) {//Setting condition for the hour is less than 23
    document.getElementById("Greetings").innerHTML = "How is your day going?";//This code will print the result of the function
    }
}

function show_Date() { //Date function
    if (new Date().getHours() < 22) { //Setting condition for the hour is less than 23
        document.getElementById("demo").innerHTML = "Have a great day!" ; //This code will print the result of the function
    }
}


function Age_Function() { //Age function
    Age = document.getElementById("Age").value;//This code sets the variable age and the value that will determine if some one is qualify to vote
    if (Age >= 18) {//This code sets the conditional of voting age
        Vote = "Your are old enough to vote!";
    }
    else { //If the condition is not met, the text "you are not old enough will display "
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("Your_age").innerHTML = Vote; //This will spit out the result of the function on the screen
}

function time_Function() {
    var Time = new Date().getHours();
    var reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("time_of_day").innerHTML = Reply;
}


