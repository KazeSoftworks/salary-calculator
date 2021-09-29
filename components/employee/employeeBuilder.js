const parser = require('../../util/parser');
const Shift = require('./shift');
const Employee = require('.');

const build = (employeeData) => {
	//console.log(employeeData);
	employeeName = parser.getEmployeeName(employeeData);
	schedule = parser.getSchedule(employeeData);
	schedule = schedule.map((shift) => {
		return new Shift(
			parser.getDay(shift),
			parser.getStartShift(shift),
			parser.getEndShift(shift)
		);
	});
	return new Employee(employeeName, schedule);
};
module.exports = build;
