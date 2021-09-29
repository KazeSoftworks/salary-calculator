//Split string by = to separate name
//Input NAME=DDHH:MM-HH:MM...
const getEmployeeName = (employeeData) => {
	employeeName = employeeData.split('=');
	return employeeName[0];
};

//List of shifts
//Input NAME=DDHH:MM-HH:MM...
const getSchedule = (employeeData) => {
	employeeSchedule = employeeData.split(/[=,]/);
	employeeSchedule.shift();
	return employeeSchedule;
};

const getDay = (employeeSchedule) => {
	day = employeeSchedule.substring(0, 2);
	return day;
};

const getStartShift = (employeeSchedule) => {
	startShift = employeeSchedule.substring(3).split('-');
	return startShift[0];
};

const getEndShift = (employeeSchedule) => {
	endShift = employeeSchedule.substring(3).split('-');
	return endShift[1];
};

module.exports = {
	getEmployeeName,
	getSchedule,
	getDay,
	getStartShift,
	getEndShift,
};
