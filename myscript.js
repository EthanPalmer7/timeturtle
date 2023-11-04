// HTML elements
var daysContainer = document.querySelector(".days");
var nextBtn = document.querySelector(".next-btn");
var prevBtn = document.querySelector(".prev-btn");
var month = document.querySelector(".month");
var todayBtn = document.querySelector(".today-btn");
// month header string
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
// title for each column
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
/**
 * Date()
 * returns a string representation of the current date and time
 * i.e. --> "Wed Nov 01 2023 12:28:59 GMT-0700 (Pacific Daylight Time)"
 */
var date = new Date();
/**
 * getMonth()
 * returns int between 0-11 inclusive representing current month
 * i.e. --> 10 (November)
 */
var currentMonth = date.getMonth();
/**
 * getFullYear()
 * returns int representing current year
 * i.e. --> 2023
 */
var currentYear = date.getFullYear();
// function to render days
function renderCalendar() {
    // get prev month, current month, and next month days
    date.setDate(1);
    var firstDay = new Date(currentYear, currentMonth, 1);
    var lastDay = new Date(currentYear, currentMonth + 1, 0);
    var lastDayIndex = lastDay.getDay();
    var lastDayDate = lastDay.getDate();
    var prevLastDay = new Date(currentYear, currentMonth, 0);
    var prevLastDayDate = prevLastDay.getDate();
    var nextDays = 7 - lastDayIndex - 1;
    // update current year and month in header
    month.innerHTML = "".concat(months[currentMonth], " ").concat(currentYear);
    // update days html
    var days = "";
    // prev days html
    for (var x = firstDay.getDay(); x > 0; x--) {
        days += "<div  class=\"day prev\">".concat(prevLastDayDate - x + 1, "</div>");
    }
    // current month days
    for (var i = 1; i <= lastDayDate; i++) {
        // check if its oday then add today class
        if (i === new Date().getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()) {
            // if date month year matches
            days += "<div class=\"day today\">".concat(i, "</div>");
        }
        else {
            // else dont add today
            days += "<div class=\"day\">".concat(i, "</div>");
        }
    }
    // next month days
    for (var j = 1; j <= nextDays; j++) {
        days += "<div class=\"day next\">".concat(j, "</div>");
    }
    // run these functions with every calendar render
    hideTodayBtn();
    daysContainer.innerHTML = days;
}
renderCalendar();
// next month btn
nextBtn.addEventListener("click", function () {
    // increase current month by one
    currentMonth++;
    // if current month gets greater than 11 make it 0 and increase year by one
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    // re-render calendar
    renderCalendar();
});
// prev month btn
prevBtn.addEventListener("click", function () {
    // decrease current month by one
    currentMonth--;
    // if current month gets less than 0 then make it 11 and decrease year by one
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    // re-render calendar
    renderCalendar();
});
// go to today
todayBtn.addEventListener("click", function () {
    // set month and year to current
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();
    // re-render calendar
    renderCalendar();
});
// hide today btn is its already current month and year
function hideTodayBtn() {
    if (currentMonth == new Date().getMonth() &&
        currentYear === new Date().getFullYear()) {
        todayBtn.style.display = "none";
    }
    else {
        todayBtn.style.display = "flex";
    }
}
//# sourceMappingURL=myscript.js.map