// Users should be able to:

// - View an age in years, months, and days after submitting a valid date through the form
// - Receive validation errors if:
//   - Any field is empty when the form is submitted
//   - The day number is not between 1-31
//   - The month number is not between 1-12
//   - The year is in the future
//   - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page
// - **Bonus**: See the age numbers animate to their final number when the form is submitted
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const elemInputBtn = document.querySelector('.btn-inputs');

const yearsAge = document.querySelector('#years-age');
const monthsAge = document.querySelector('#months-age');
const daysAge = document.querySelector('#days-age');

elemInputBtn.addEventListener('click', calculateAge);

let currentDate = new Date();
// let userDate = new Date('2002-07-20');
let userDate;
// console.log(currentDate.toDateString());
let dayInTheMonthDifference;
let monthDifference;
let yearDifference;

// function init() {}

// get user birthday input using DOM
// and save it to variables
// function getUserBirthday() {}

// - Receive validation errors if:
//   - Any field is empty when the form is submitted
//   - The day number is not between 1-31
//   - The month number is not between 1-12
//   - The year is in the future
//   - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
//return true or false
function checkIsValidDate() {
  return (
    day.valueAsNumber <= 31 &&
    day.valueAsNumber > 0 &&
    month.valueAsNumber > 0 &&
    month.valueAsNumber <= 12 &&
    year.valueAsNumber < currentDate.getFullYear()
  );
}

// calculate the amount of dayInTheMonth, months, years, from
// the user input to the current date
function calculateAge() {
  // console.log(`${day.value}`);

  // console.log(
  //   `theDOM: ${day.valueAsNumber}  ${month.valueAsNumber}  ${year.valueAsNumber}`
  // );
  if (!checkIsValidDate()) {
    return;
  }
  userDate = new Date(
    `${year.valueAsNumber}-${month.valueAsNumber}-${day.valueAsNumber}`
  );
  // console.log(userDate.toDateString());
  dayInTheMonthDifference = currentDate.getDate() - userDate.getDate();
  // console.log(dayInTheMonthDifference);
  monthDifference = currentDate.getMonth() - userDate.getMonth();
  // console.log(monthDifference);
  yearDifference = currentDate.getFullYear() - userDate.getFullYear();
  // console.log(yearDifference);

  if (dayInTheMonthDifference < 0) {
    monthDifference -= 1;
    dayInTheMonthDifference += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }
  if (monthDifference < 0) {
    yearDifference -= 1;
    monthDifference += 12;
  }

  yearsAge.innerHTML = yearDifference;
  monthsAge.innerHTML = monthDifference;
  daysAge.innerHTML = dayInTheMonthDifference;
  // console.log(
  //   `the age is: ${dayInTheMonthDifference} days ${monthDifference} months ${yearDifference} years`
  // );
}
// calculateAge();
