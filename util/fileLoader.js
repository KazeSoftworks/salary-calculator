const fs = require('fs');
const path = require('path');

const fileLoader = (fileName) => {
	return new Promise((resolve, reject) => {
		fs.readFile(
			`${path.dirname(require.main.filename)}/data/${fileName}`,
			(err, data) => {
				if (err) {
					console.error(err);
					return;
				}
				console.log(data.toString());
			}
		);
	});
};

module.exports = fileLoader;
