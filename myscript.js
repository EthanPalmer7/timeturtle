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
// i.e. --> date == "Wed Nov 01 2023 12:28:59 GMT-0700 (Pacific Daylight Time)"
var date = new Date();
// int between 0-11 inclusive representing current month
var currentMonth = date.getMonth();
// currentYear == 2023
var currentYear = date.getFullYear();
// function to render days
function renderCalendar() {
    // get prev month, current month, and next month days
    date.setDate(1);
    // i.e. --> firstDay == "Wed Nov 01 2023 00:00:00 GMT-0700 (Pacific Daylight Time)"
    var firstDay = new Date(currentYear, currentMonth, 1);
    // i.e. --> lastDay == "Thu Nov 30 2023 00:00:00 GMT-0800 (Pacific Standard Time)"
    var lastDay = new Date(currentYear, currentMonth + 1, 0);
    // i.e. --> lastDayIndex == (0 Sunday, 6 Saturday)
    var lastDayIndex = lastDay.getDay();
    // i.e. --> lastDayDate == (1-31)
    var lastDayDate = lastDay.getDate();
    // i.e. --> prevLastDay == "Tue Oct 31 2023 00:00:00 GMT-0700 (Pacific Daylight Time)"
    var prevLastDay = new Date(currentYear, currentMonth, 0);
    // i.e. --> prevLastDayDate == (1-31)
    var prevLastDayDate = prevLastDay.getDate();
    // number of days to display after the last day (if lastday of the month is saturday, index == 6, and nextdays == 0)
    var nextDays = 7 - lastDayIndex - 1;
    // update current year and month in header
    month.innerHTML = "".concat(months[currentMonth], " ").concat(currentYear);
    //
    var days = "";
    // get day of week for 1st day of month (we want to know if it is Wed (3) etc..)
    // if day is sunday skip, else add prev month days to HTMLElement to days String
    // iterate through days before 1st day untill sunday (i.e. --> if 1st day is wednesday, iterate 3 times (Sun, Mon, Tues))
    // add prev days to days string as HTMLELement with added class tag 'prev'
    for (var x = firstDay.getDay(); x > 0; x--) {
        // add prev days starting from sunday to day before 1st day
        days += "<div  class=\"day prev\">".concat(prevLastDayDate - x + 1, "</div>");
    }
    // loop through days in month, if i == current day of month add class tag 'today', else dont add class tag 'today'
    // add all 28+ days as HTMLElements to days string
    for (var i = 1; i <= lastDayDate; i++) {
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
    // loop thorugh days after last day
    // add next days to days string as HTMLELement with added class tag 'next'
    for (var j = 1; j <= nextDays; j++) {
        days += "<div class=\"day next\">".concat(j, "</div>");
    }
    // run these functions with every calendar render
    hideTodayBtn();
    // add to the innerHTML of the days class (daysContainter variable) to display all days (prev, currentmonth, today, next)
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
var daysChildContainer = daysContainer.querySelectorAll(".day");
var popup = document.querySelector(".popup");
daysChildContainer.forEach(function (daysChild) {
    daysChild.addEventListener("click", function () {
        popup.style.display = "flex";
    });
});
//# sourceMappingURL=myscript.js.map