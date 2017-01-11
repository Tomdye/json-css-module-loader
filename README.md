# Json Css Module Loader

Webpack loader to load css-module json output and the corresponding css file.
ie. loading `myApp.css.json` will provide the requiring module with the css-module
classnames and create a require for `myApp.css` so that the `css` is included.

## Installation

`npm install --save json-css-module-loader`

## Usage

### Webpack 1 config

You may need to add `.css.json` (or similar) to your webpack resolve extensions.

``` javascript
module: {
	loaders: [
		{ test: /\.css\.json$/, loader: 'json-css-module-loader' }
	]
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
