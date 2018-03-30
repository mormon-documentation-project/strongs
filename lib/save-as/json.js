const { writeFileSync } = require('fs');
const { cyan } = require('chalk');

module.exports = function(data, prefix = '') {
	for (let lang in data) {
		const filename = `strongs-${lang}.json`;

		console.log(cyan(`${prefix}  ./${filename}`));

		writeFileSync(filename, JSON.stringify(data[lang]), 'utf8');
	}
};
