const path = require('path');

module.exports = (env = {}) => ({
    mode: 'production',
    entry: env.entry || './0.8/MangaTV/index.js',
    output: {
        path: path.resolve(__dirname, '0.8/MangaTV'),
        filename: env.filename || 'index.bundle.js',
        library: {
            name: 'Sources',
            type: 'umd'
        },
        globalObject: 'this'
    },
    resolve: {
        extensions: ['.js']
    },
    target: ['web', 'es5']
});
