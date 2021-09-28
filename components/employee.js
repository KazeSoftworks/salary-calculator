const parser = require('../utility/parser');

class Employee {
	constructor(name, shifts) {
		this.name = name;
		this.shifts = shifts;
	}
}

module.exports = Employee;
