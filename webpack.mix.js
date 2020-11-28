const mix = require('laravel-mix');

mix.less('resources/less/style.less', 'public/css/style.css')
    .react('resources/js/index.js', 'public/js')



.webpackConfig({devtool: 'source-map'})
    .sourceMaps()
    .version()
