var People = { "name":"Emily", "age":45, "city":"Portland"};
var myJSON = JSON.stringify(People);
document.getElementById("sample").innerHTML = myJSON;
//set item
var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
//retrieve
document.getElementById("demo").innerHTML = obj.firstName;

// Set Item
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("local storage").innerHTML = localStorage.getItem("lastname");