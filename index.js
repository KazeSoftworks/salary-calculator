const fileLoader = require('./util/fileLoader');
const buildEmployee = require('./components/employee/employeeBuilder');
const payment = require('./components/payment');

employeesRawData = fileLoader('data.txt')
	.then((employeesData) => {
		employees = employeesData.map(buildEmployee);
		employees.map(payment);
	})
	.catch((err) => {
		console.error(err);
	});
