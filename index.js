const fileLoader = require('./util/fileLoader');
const parser = require('./util/parser');
const Shift = require('./components/shift');
const Employee = require('./components/employee');

employeesRawData = fileLoader('data.txt')
	.then((employeesData) => {
		employeesData.forEach((employee) => {
			employeeName = parser.getEmployeeName(employee);
			shifts = [];
			schedule = parser.getSchedule(employee);
			schedule.forEach((shift) => {
				shifts.push(
					new Shift(
						parser.getDay(shift),
						parser.getStartShift(shift),
						parser.getEndShift(shift)
					)
				);
			});
			console.log(new Employee(employeeName, shifts));
		});
	})
	.catch((err) => {
		console.error(err);
	});
