const mix = require('laravel-mix');

mix.webpackConfig({
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    }
})

mix.react('resources/js/index.js', 'public/js')
