/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 Given a date, return the corresponding day of the week
 for that date.

The input is given as three integers representing 
the day, month and year respectively.

Return the answer as one of the following values 
{"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
 */

var dayOfTheWeek = function(day, month, year) {
    let currentDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     let inputDate = new Date (`${month}-${day}-${year}`);
    return currentDay[inputDate.getDay()];
};

var dayOfTheWeek = function(day, month, year) {
    const date = new Date(year, month - 1, day);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
};