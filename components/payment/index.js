const { time } = require('console');
const schedule = require('./schedule');

const isWeekend = (day) => {
	return schedule.WEEKENDS.includes(day);
};

const getShiftNames = (start, end) => {
	return Object.keys(SHIFT_HOURS_START).filter(
		(key) =>
			SHIFT_HOURS_START[key] < end && SHIFT_HOURS_END[key] >= start
	);
};

const getHours = (time, isEnd) => {
	//clock[0] is hour, clock[1] is minutes
	//Specific on a 23:59 time that requires 24 for calculation
	clock = time.split(':').map(Number);
	if (clock[0] === 0 && isEnd) {
		return 24;
	}
	return clock[0];
};

const get24Format = (time) => {
	clock = time.split(':').map(Number);
	if (clock[0] === 0) {
		return '23:59';
	}
	return time;
};

const calculateSalary = (workTime, shiftName, day) => {
	if (isWeekend(day)) {
		return workTime * WEEKEND_PAYMENT[shiftName];
	} else {
		return workTime * WEEKDAYS_PAYMENT[shiftName];
	}
};

const getPayroll = (shift) => {
	const shiftNames = getShiftNames(
		shift.start,
		get24Format(shift.end)
	);
	// console.log(shiftNames);
	const salary = shiftNames.reduce((previous, currentShift) => {
		// console.log(
		// 	get24Format(shift.end),
		// 	get24Format(SHIFT_HOURS_END[currentShift])
		// );
		if (
			get24Format(shift.end) <=
			get24Format(SHIFT_HOURS_END[currentShift])
		) {
			const workTime =
				getHours(shift.end, true) - getHours(shift.start);
			const partialSalary = calculateSalary(
				workTime,
				currentShift,
				shift.day
			);
			// console.log(partialSalary);
			return previous + partialSalary;
		} else {
			const workTime =
				getHours(SHIFT_HOURS_END[currentShift], true) -
				getHours(shift.start);
			const partialSalary = calculateSalary(
				workTime,
				currentShift,
				shift.day
			);
			// console.log(partialSalary);
			shift.start = SHIFT_HOURS_END[currentShift];
			return previous + partialSalary;
		}
	}, 0);
	return salary;
};

const getSalary = (employee) => {
	const salary = employee.shifts.reduce((previous, current) => {
		return previous + getPayroll(current);
	}, 0);
	console.log(`The amount to pay ${employee.name} is ${salary} USD`);
};

module.exports = getSalary;
