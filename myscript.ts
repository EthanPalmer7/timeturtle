// HTML elements
const daysContainer: HTMLElement | null = document.querySelector(".days");
const nextBtn: HTMLElement | null = document.querySelector(".next-btn");
const prevBtn: HTMLElement | null = document.querySelector(".prev-btn");
const month: HTMLElement | null = document.querySelector(".month");
const todayBtn: HTMLElement | null = document.querySelector(".today-btn");

// month header string
const months: string[] = [
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
const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * Date()
 * returns a string representation of the current date and time
 * i.e. --> "Wed Nov 01 2023 12:28:59 GMT-0700 (Pacific Daylight Time)"
 */
const date: Date = new Date();

/**
 * getMonth()
 * returns int between 0-11 inclusive representing current month
 * i.e. --> 10 (November)
 */
let currentMonth: number = date.getMonth();

/**
 * getFullYear()
 * returns int representing current year
 * i.e. --> 2023
 */
let currentYear: number = date.getFullYear();

// function to render days
function renderCalendar(): void {
  // get prev month, current month, and next month days
  date.setDate(1);
  const firstDay: Date = new Date(currentYear, currentMonth, 1);
  const lastDay: Date = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex: number = lastDay.getDay();
  const lastDayDate: number = lastDay.getDate();
  const prevLastDay: Date = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate: number = prevLastDay.getDate();
  const nextDays: number = 7 - lastDayIndex - 1;

  // update current year and month in header
  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  // update days html
  let days: string = "";

  // prev days html
  for (let x: number = firstDay.getDay(); x > 0; x--) {
    days += `<div  class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  // current month days
  for (let i: number = 1; i <= lastDayDate; i++) {
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
  for (let j: number = 1; j <= nextDays; j++) {
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

function hideTodayBtn(): void {
  if (
    currentMonth == new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}
