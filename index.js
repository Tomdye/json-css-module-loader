module.exports = function(source, sourceMap) {
	var fileName = this.resourcePath;
	var cssFileName = this.resourcePath.replace(/.styl.json$/, '.css');

	this.cacheable && this.cacheable();
	var value = typeof source === "string" ? JSON.parse(source) : source;
	this.value = [value];

	var output = `require('${cssFileName}');\nmodule.exports =  ${JSON.stringify(value)} ;`;

	return output;
}
