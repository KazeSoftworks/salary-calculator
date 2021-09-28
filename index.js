const fileLoader = require('./util/fileLoader');
//const parser = require('./utility/parser');

employeesRawData = fileLoader('data.txt')
	.then((employeesData) => {
		console.log(employeesData);
		//console.log(employeesData.map(parser.employeeName));
	})
	.catch((err) => {
		console.error(err);
	});
