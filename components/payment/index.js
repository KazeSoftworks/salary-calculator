const { time } = require('console');
const schedule = require('./schedule');

const isWeekend = (day) => {
	return schedule.WEEKENDS.includes(day);
};

const getShiftNames = (start, end) => {
	return Object.keys(SHIFT_HOURS_START).filter(
		(key) =>
			SHIFT_HOURS_START[key] <= end && SHIFT_HOURS_END[key] >= start
	);
};

const getHours = (time) => {
	//clock[0] is hour, clock[1] is minutes
	//Specific on a 23:59 time that requires 24 for calculation
	clock = time.split(':').map(Number);
	if (clock[1] >= 59) {
		clock[0] + 1;
	}
	return clock[0];
};

const calculateSalary = (workTime, shiftName, day) => {
	if (isWeekend(day)) {
		return workTime * WEEKEND_PAYMENT[shiftName];
	} else {
		return workTime * WEEKDAYS_PAYMENT[shiftName];
	}
};

const getPayroll = (shift) => {
	const shiftNames = getShiftNames(shift.start, shift.end);
	if (shiftNames.length === 1) {
		const workTime = getHours(shift.end) - getHours(shift.start);
		const salary = calculateSalary(
			workTime,
			shiftNames[0],
			shift.day
		);
		return salary;
	}

	//return salary;
};

const getSalary = (employee) => {
	console.log(employee.name);
	const salary = employee.shifts.reduce((previous, current) => {
		return previous + getPayroll(current);
	}, 0);
	console.log(`The amount to pay ${employee.name} is ${salary} USD`);
};

module.exports = getSalary;
