function my_Dictionary() { //Dictionary to show KVPs//
    var Animal = {         //Variable animal//
        Species: "Dog",    //key:species and the value: Dog//
        Color: "White",    //key:color and the value: White//
        Breed: "Labrador", //key:Breed and the value: Labrador//
        Age: 5,            //key:Age and the value: 5//
        Sound: "Bark!"     //key:Sound and the value: Bark//
    };
    delete Animal.Color; // this code delete a key Color and its value White//
    document.getElementById("Dictionary").innerHTML = Animal.Color; //this code displays undefined on the screen because the key value has been deleted!//
}

function challenge_Dictionary() { //Dictionary to show KVPs//
    var Car = {
        Type: "Mercedes", //key:Type and the value: Mercedes//
        Type: "Benz",     //key Type and the value: Benz//
        Color: "Blue"    //key:Color and the value: Blue//
    };
    document.getElementById("test").innerHTML = Car.Type; //This code gets the last key value being typed because there is more than one key.//

}

function tree_Dictionary() { //Dictionary to show KVPS//
    var Trees = {
        Type: "Mango",  //key:Type and the value: Mango//
        Color: "Yellow", //key:Color and the value: Yellow//
        Taste: "Sweet"  //key:Taste and the value: Sweet//
    };
    document.getElementById("tree").innerHTML = Trees.Taste; //This code will print the key Taste and it's value Sweet//
}


