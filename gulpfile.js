/**
 * Created by filip on 6/7/2016.
 */

/*
 Als eerste krijgen we de modules die we zojuist geïnstalleerd en nodig hebben (Gulp en Gulp-Sass).
 */
var elixir = require('laravel-elixir');

/*
Laravel-elixir configuration:



 */


/*
 |----------------------------------------------------------------
 | Assets Path
 |----------------------------------------------------------------
 |
 | This assets path property is prefixed to all relevant assets
 | in your application. For example, "resources/assets/sass"
 | or "resources/assets/coffee." Change this if you must.
 |
 */
elixir.config.assetsPath = 'assets';

/*
 |----------------------------------------------------------------
 | Public Path
 |----------------------------------------------------------------
 |
 | Much like assets path, this public path property is prefixed to
 | any paths in your application, that point to the public dir.
 | It's useful, when a server requires a unique public path.
 |
 */

elixir.config.publicPath = 'public/build';

/*
 |----------------------------------------------------------------
 | View Path
 |----------------------------------------------------------------
 |
 | Very likely, you will never need/want to modify this property.
 | However, for the instances where your app's views directory
 | is located in a different spot, please modify as needed.
 |
 */
elixir.config.viewPath = './';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

/* all copy stuff */

elixir(function(mix) {

    mix.copy('node_modules/jquery/dist',
        'js/jquery/');

    mix.copy(
        'node_modules/font-awesome/fonts',
        'fonts/font-awesome'
    );

    mix.copy(
        'node_modules/font-awesome/scss/',
        'assets/sass/vendor/font-awesome/'
    );

});


/* all sass stuff compileren */

elixir(function (mix2) {
    mix2.sass([
        'thema1/main.scss'
    ],'assets/css/thema1.css');
});

/* alle css files samenvoegen tot 1 bestand */
elixir(function (mix3) {
    mix3.styles([
        'assets/css/thema1.css'
    ],'css/thema1.css')
});

/* all scripts stuff samenvoegen naar de js folder in root tot 1 bestand*/

elixir(function (mix4) {
    mix4.scripts([
        'assets/js/app.js'
    ],'js/app.js'
    );
});



elixir(function (mix5) {

    //mix5.browserify('app.js','js/app.js');

    mix5.browserSync({
        files: ['**/*.html', 'js/**/*.js', 'css/**/*.css'],
        proxy: undefined,
        server: {
            baseDir: "./"
        }
    });

});

/*
elixir(function (mix6) {
    mix6.scripts();
});
*/

