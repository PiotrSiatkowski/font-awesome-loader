# font-awesome-npm-loader

[![npm version](https://www.npmjs.com/package/font-awesome-npm-loader.svg)](https://www.npmjs.com/package/font-awesome-npm-loader)

Font awesome configuration and loading package for webpack, using font-awesome (Sass).

## Usage

In your project copy font-awesome.config.js and import it, for example:

```javascript
 import './font-awesome/font-awesome.config';
```

Add loader to your webpack 3 configuration:

```javascript
{
    loader: 'font-awesome-npm-loader'
}
```

Use additional option:

```javascript
options: {
  pathRelativeTo: 'path'
}
```

to change path from which fonts and styles will be read.

Remember that this loader generates .scss content. Use other loaders alongside to it to process it further.

## Credits

* Based on font-awesome-loader (Justin Gordon)
* Based on font-awesome-webpack (gowravshekar)
