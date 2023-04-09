function My_First_Function() {
    var str = "Happy birthday!";
    document.getElementById("Button_Text").innerHTML = str;
}

function My_Second_Function() {
    document.getElementById("sample").style.color = "blue";
}

function My_Third_Function() {
    var sentence = "I am learning a lot about coding at Tech Academy";
    sentence += " Hopefully I will become a software developer soon!";
    document.getElementById("concatenate").innerHTML = sentence;
}

function My_Fourth_Function(A, B) {
    return A * B;
  }
  document.getElementById("number").innerHTML = My_Fourth_Function(4, 3);