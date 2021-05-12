function userSubmit() {
  var fn = document.getElementById("inputFN").value;
  var ln = document.getElementById("inputLN").value;
  var motto = document.getElementById("inputM").value;
  var pic = document.getElementById("inputP").value;
  var age = document.getElementById("inputA").value;
  if (fn == "" || ln == "" || motto == "" || pic == "" || age == "") {
    alert("walay sulod!");
  } else {
    document.getElementById("displayP").src = pic;
    document.getElementById("displayA").innerHTML = age;
    verifyAge();
    document.getElementById("displayN").innerHTML = fn + " " + ln;
    document.getElementById("displayM").innerHTML = '"' + motto + '"';
  }
}

function verifyAge() {
  var age = document.getElementById("inputA").value;
  if (age < 18) {
    document.getElementById("displayAN").innerHTML = "You are a minor!";
  } else if (age >= 18 && age < 60) {
    document.getElementById("displayAN").innerHTML = "You are not a minor!";
  } else if (age > 59) {
    document.getElementById("displayAN").innerHTML = "You are old!";
  }
}

var today = new Date();
var week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var day = today.getDay();
console.log("Today is: " + week[day]);
