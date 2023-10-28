const daysContainer = document.querySelector(".days"),
  nextBtn = document.querySelector(".next-btn"),
  prevBtn = document.querySelector(".prev-btn"),
  month = document.querySelector(".month");

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
  const prevlastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;
}
