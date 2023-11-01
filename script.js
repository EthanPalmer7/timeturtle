const daysContainer = document.querySelector(".days"),
  nextBtn = document.querySelector(".next-btn"),
  prevBtn = document.querySelector(".prev-btn"),
  month = document.querySelector(".month"),
  todayBtn = document.querySelector(".today-btn");

// <!-- prev month days -->
// <div class="day prev">28</div>
// <div class="day prev">29</div>
// <div class="day prev">30</div>
// <!-- current month days -->
// <div class="day">1</div>
// <div class="day">2</div>
// <div class="day">3</div>
// <div class="day today">4</div>
// <div class="day">5</div>
// <div class="day">6</div>
// <div class="day">7</div>
// <!-- next month days -->
// <div class="day next">1</div>
// <div class="day next">2</div>
// <div class="day next">3</div>

const months = [
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

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// get current date
const date = new Date();

// get current month
let currentMonth = date.getMonth();

// get current year
let currentYear = date.getFullYear();

// function to render days
function renderCalendar() {
  // get prev month, current month, and next month days
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  // update current year and month in header
  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  // update days html
  let days = "";

  // prev days html
  for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div  class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  // current month days
  for (let i = 1; i <= lastDayDate; i++) {
    // check if its oday then add today class
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      // if date month year matches
      days += `<div class="day today">${i}</div>`;
    } else {
      // else dont add today
      days += `<div class="day">${i}</div>`;
    }
  }

  // next month days
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next">${j}</div>`;
  }

  // run these functions with every calendar render
  hideTodayBtn();
  daysContainer.innerHTML = days;
}

renderCalendar();

// next month btn
nextBtn.addEventListener("click", () => {
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
prevBtn.addEventListener("click", () => {
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
todayBtn.addEventListener("click", () => {
  // set month and year to current
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  // re-render calendar
  renderCalendar();
});

// hide today btn is its already current month and year

function hideTodayBtn() {
  if (
    currentMonth == new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}
