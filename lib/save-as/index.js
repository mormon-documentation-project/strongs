const { yellow } = require('chalk');

const saveAs = {
	json: require('./json'),
};

module.exports = Object.assign({}, saveAs, {
	all(...args) {
		for (let type in saveAs) {
			console.log(yellow(`  ${type}:`));

			saveAs[type](...args, '  ');
		}
	},
});
