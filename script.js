//DPENDENTS
// var currentDay = document.querySelector("#currentDay");
var date = moment().format("M/D/YYYY");
var now = moment().format("H");
//ready init allows page to load
$(document).ready(init);

//this function shows the current date and time on each row and makes the save button clickable
function init() {
  $("#currentDay").text(date);
  $(".time-block").each(buildRow);
  $(".saveBtn").click(saveBtn);
}
//function starts with the time blocks
function buildRow() {
  //declairing the time in this scope and linking data hour to each time block
  var time = $(this).attr("data-hour");
  //takes the time to stringify and returns value
  time = parseInt(time);
  //color coding each block with declared variable above
  if (now === time) {
    $(this).addClass("present");
  }
  if (now > time) {
    $(this).addClass("past");
  }
  if (now < time) {
    $(this).addClass("future");
  }
  //declairing variables which will be used to store the user input
  var selector = "#hour-" + time + " .description";
  var storageKey = "hour-" + time;
  var storageValue = localStorage.getItem(storageKey);

  $(selector).val(storageValue);
}
function saveBtn() {
  //pull nearby values
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  //set items in local storage as a key value pair
  localStorage.setItem(time, text);
}

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, "0");
// var mm = String(today.getMonth() + 1).padStart(2, "0");
// var yyyy = today.getFullYear();
// today = mm + "/" + dd + "/" + yyyy;
// currentDay.textContent = today;

// function myHour() {
//   var d = new Date();
//   var n = d.getHours();
//   return parseInt(n);
// }

// var time = [
//   00,
//   01,
//   02,
//   03,
//   04,
//   05,
//   06,
//   07,
//   08,
//   09,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
//   22,
//   23,
//   24,
// ];

/* for (var i = 0; i < time.length; i++) {
    if (myHour() === time[i]) {
      //if time.key === myHour, then block is red
    }
    if (myHour() < time[i]) {
      //if time.key < myHour, then block is grey
    }
    if (myHour() > time[i]) {
      // if time.key> if time.key < myHour, then block is green
    }function colorBlock() {
      //     if (myHour < 09 || myHour > 17){
    // //turn  all the divs to yellow
    */
/* 
for (var i = 0; i < scheduleItems.length; i++) {
  var item = scheduleItems[i];
        var hour = scheduleItems[i];
        var li = document.createElement(“li”);
        li.textContent = todo;
        li.setAttribute(“data-index”, i);
        var button = document.createElement(“button”);
        button.textContent = “Complete”;
        li.appendChild(button);
        todoList.appendChild(li);
      }
 */

//saves the input even after reloading page
//passing in key value pair (like get element by ID)
// $("#hour-9 .description").val(localStorage.getItem("hour-9"));
// $("#hour-10 .description").val(localStorage.getItem("hour-10"));
// $("#hour-11 .description").val(localStorage.getItem("hour-11"));
// $("#hour-12 .description").val(localStorage.getItem("hour-12"));
// $("#hour-13 .description").val(localStorage.getItem("hour-13"));
// $("#hour-14 .description").val(localStorage.getItem("hour-14"));
// $("#hour-15 .description").val(localStorage.getItem("hour-15"));
// $("#hour-16 .description").val(localStorage.getItem("hour-16"));
// $("#hour-17 .description").val(localStorage.getItem("hour-17"));
