function full_Sentence() { //Concatenate function
    var part_1 = "There are many ";
    var part_2 = "things I love ";
    var part_3 = "however, I love ";
    var part_4 = "playing soccer the most";
    var complete_sentence = part_1.concat(part_2, part_3, part_4);//This code concatenate the values of variable part 1,2,3 and 4
    document.getElementById("concatenate").innerHTML = complete_sentence;//This code prints out the result of the function on the screen
}

function slice_Method() { //Slice function
    var Sentence = "All work and no play make Sankung super sad!";
    var Section = Sentence.slice(26,33);//This code shows the characters between 26 and 33
    document.getElementById("Slice").innerHTML = Section;//This code prints out the characters specified in line 12
}

function upper_case_Method() {//Upper case function
    var Sentence = "I can't wait to go on vacation to hawai";
    var Result = Sentence.toUpperCase();//This code turns the value of the variable sentence into uppercase letters
    document.getElementById("uppercase").innerHTML = Result;//This code displays the result of the function above
}

function search_Method() {//Search function
    var Sentence = "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"
    Search = Sentence.search("falling");//This code shows search 'falling' in the sentence variable and prints out the character number on the screen
    document.getElementById("search").innerHTML = Search;//This code will display the result of the function
}

function string_Method() {//This fucntion specifies turning numbers to string
    var X = 167;
    document.getElementById("numbers_to_string").innerHTML = X.toString();//This code will turn the number to a string format on the screen
}

function precision_Method() { //Precision function
    var X = 1363.20976458;
    document.getElementById("precision").innerHTML = X.toPrecision(9);//This code will set the value of the variable to 9 character numbers
}

function fix_Method() {//toFixed function
    var num = 7.6789;
    document.getElementById("number").innerHTML = num.toFixed(1);//This code fix the decimal to 1 place
}

function value_of_Method() { //valueOF method
    var text = "HELLO WORLD!";
    var result = text.valueOf();//This code displays the value of the variable text
    document.getElementById("text").innerHTML = result;//This code displays the function result
}