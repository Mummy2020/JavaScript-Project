function call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = Digit;
}

function length_Property() {
    var text = "Hello World! here I am!";
    var lenght = text.length;
    document.getElementById("length").innerHTML = Digit;