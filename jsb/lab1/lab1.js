//Js Document
var secondsInAMinute = 60;
var minutesInAHour = 60;
var hoursInADay = 24;
var daysInAYear = 365;

var secondsInAnHour = secondsInAMinute * minutesInAHour;
document.write("The number of seconds in an hour is " + secondsInAnHour);
document.write("<br>");

var secondsInADay = secondsInAnHour*hoursInADay;
document.write("The Number of seconds in a day is " + secondsInADay);
document.write("<br>");

var secondsInAYear =secondsInADay * daysInAYear;
document.write("The number of seconds in a year are " + secondsInAYear);
document.write("<br>");
document.write(("<br>"));
document.write("Created By Hamza J.");
