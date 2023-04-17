function color_Function() { //color function
    var color_output;//Setting the variable for output
    var colors = document.getElementById("color_input").value;//This code will allow users to enter the color of their choice
    var color_string = " is a great color!";//This code displays the text after choosing a color
    switch(colors) {//Color switch function
        case "Red":
            color_output = "Red" + color_string;//This code allows users to pick the choce they want plus a display text saying is a great color
            break;//This code breaks out the function to the next color
            case "Green":
                color_output = "Green" + color_string;//This code allows users to pick the choce they want plus a display text saying is a great color
                break;
                case "Blue":
                    color_output = "Blue" + color_string;//This code allows users to pick the choce they want plus a display text saying is a great color
                    break;
                    case "Pink":
                        color_output = "Pink" + color_string;//This code allows users to pick the choce they want plus a display text saying is a great color
                        break;
                        case "Purple":
                            color_output = "Purple" + color_string;//This code allows users to pick the choce they want plus a display text saying is a great color
                            break;
                            default:
                                color_output = "Please enter a color exactly as written on the above list.";//This code will display if you choose a color that is not listed
    }
    document.getElementById("output").innerHTML = color_output;
}

function get_element_by_Class() {
    var A =document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,350,0);
grd.addColorStop(0,"red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10,10,5000,500)

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("HELLO WORLD",150,150);