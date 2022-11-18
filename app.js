const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const createCalObject = function (totalDays, firstDay) {
    const defaultWeekDays = [false, false, false, false, false, false, false];
    const calenderObject = [[...defaultWeekDays]];

    let dayIndex = firstDay;
    let weekIndex = 0;
    for (let day = 0; day < totalDays; day++) {
        calenderObject[weekIndex][dayIndex] = day + 1;

        if (dayIndex == 6) {
            calenderObject.push([...defaultweekIndex]);
            weekIndex += 1;
            dayIndex = 0;
        } else {
            dayIndex += 1;
        }
        return calenderObject;
    }
}

const getDaysInMonth = function (month, year) {
    return new Date(year, month, 0).getDate();
};

const getFirstDayInMonth = function (month, year) {
    return new Date(year, month - 1, 1).getDay();
};



/** Handle change of month and year and show updated calander */
const changeCalanderMonthYear = function (month, year) {
    const totalDaysInMonth = getDaysInMonth(month, year);
    const firstDayInMonth = getFirstDayInMonth(month, year);
    const calander = createCalObject(totalDaysInMonth, firstDayInMonth);
    constructCalanderUI(calander);
};
