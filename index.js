const loaderUtils = require('loader-utils');

// Styles to be filtered.
const styles = [
    'variables',
    'mixins',
    'path',
    'core',
    'larger',
    'fixed-width',
    'list',
    'bordered-pulled',
    'animated',
    'rotated-flipped',
    'stacked',
    'icons',
    'screen-reader'
];

module.exports = function(source) {
    this.cacheable(true);

    const options = loaderUtils.getOptions(this) || {};
    const configuration = this.exec(source, this.resourcePath);

    // When using npm 5.x.x dependency structure might not be flat.
    const pathRelativeTo = options.pathRelativeTo;

    const start =
        pathRelativeTo
            ? `@import '${pathRelativeTo}font-awesome/scss/_variables.scss';\n` +
              `$fa-font-path: '${pathRelativeTo}font-awesome/fonts/';\n` +
              `@import './font-awesome.config.scss';\n`

            : `@import '~font-awesome/scss/_variables.scss';\n` +
              `$fa-font-path: '~font-awesome/fonts/';\n` +
              `@import './font-awesome.config.scss';\n`;

    const output = start +
        styles.filter((style) => {
            return configuration.styles[style];
        }).map((style) => {
            return `@import '${pathRelativeTo ? pathRelativeTo : '~'}font-awesome/scss/_${style}.scss';`;
        }).join('\n');

    return output;
};
