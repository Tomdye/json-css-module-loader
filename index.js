module.exports = function(source, sourceMap) {
	var fileName = this.resourcePath;
	// Remove the .json ext, will be .css / .scss  / .styl etc... now
	// to be picked up by other loaders
	var cssFileName = this.resourcePath.replace(/.json$/, '');

	this.cacheable && this.cacheable();
	var value = typeof source === "string" ? JSON.parse(source) : source;
	this.value = [value];

	var output = `require('${cssFileName}');\nmodule.exports =  ${JSON.stringify(value)} ;`;

	return output;
}
