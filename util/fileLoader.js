const fs = require('fs');
const path = require('path');

const fileLoader = (fileName) => {
	return new Promise((resolve, reject) => {
		fs.readFile(
			`${path.dirname(require.main.filename)}/datas/${fileName}`,
			(err, data) => {
				if (err) {
					return reject(
						new Error('[File loader] File could not be read')
					);
				}
				employeesData = data.toString().split('\n');
				return resolve(employeesData);
			}
		);
	});
};

module.exports = fileLoader;
