const path = require('path');
const JSON_EXT = '.json';

module.exports = function(source, sourceMap) {
	const fileName = this.resourcePath;
	const ext = path.extname(fileName);
	let outputSource;
	let value;

	if (ext === JSON_EXT) {
		value = typeof source === "string" ? JSON.parse(source) : source;
		outputSource = JSON.stringify(value);

	} else {
		value = source;
		outputSource = value;
	}

	// Remove the extension, will be .css / .scss  / .styl etc...
	// now to be picked up by other loaders
	const extRegExp = new RegExp(ext + '$');
	const cssFileName = this.resourcePath.replace(extRegExp, '.css');

	this.cacheable && this.cacheable();
	this.value = [ value ];

	var output = `require('${cssFileName}');\n${outputSource};`;

	return output;
}
