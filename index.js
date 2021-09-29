const fileLoader = require('./util/fileLoader');
const Employee = require('./components/employee');
const buildEmployee = require('./components/employeeBuilder');

employeesRawData = fileLoader('data.txt')
	.then((employeesData) => {
		employees = employeesData.map(buildEmployee);
	})
	.catch((err) => {
		console.error(err);
	});
