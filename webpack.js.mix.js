let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.tsx', 'public/js')
   .webpackConfig({
        module: {
            rules: [
                {
			        test: /.jsx?$/,
			        loader: 'babel-loader',
			        exclude: /node_modules/,
			        query: {
			        	presets: ['es2015', 'react']
			        }
			    },
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            	{ 
            		test: /\.tsx?$/,
            		loader: "awesome-typescript-loader" 
            	},
            	// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            	{ 
            		enforce: "pre", 
            		test: /\.js$/, 
            		loader: "source-map-loader" 
            	}
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
        },
    });



