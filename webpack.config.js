const path = require('path');
module.exports = {
    //define entry points
    entry: ['babel-polyfill', './browser/index.js'],
    //define output point
    output : {
        //path where we want to output, once I run the web pack it outputs automatically
        path: __dirname,
        //filename => I want to output in bundle.js
        filename: 'bundle.js'
    },
    module : {
        rules: [
            //1 => for .JS files
            {
                //tests particular files => we want to run loader only for .JS files,
                //because we do not want our loader to test every single file, for example node_modules
                test :/\.js$/,
                //what files to exclude?
                exclude: /[node_modules]/,
                //which loader to user? ofc babel loader ))
                loader : "babel-loader",
                //which presets? do you want to transform into JSX? or es2015 or stage-0 (deals all the differences between ES5, ES6, ES7)??? I need to specify it right here
                query : {
                    presets:['es2015', 'stage-0' ]
                }
            },
            //2 => for .CSS files
            {
                //css loader => loads all the CSS into JS file
                //add those styles into DOM
                test :/\.css$/,
                loader : "style-loader!css-loader",
            },
            //3 => for JSX (React)
            {
                // test :/\.(js||jsx)$/
                test: /\.jsx?$/ , 
                exclude: '/node_modules/',
                use: [
                    {
                        loader : "babel-loader",
                        presets:['react' ]

                    }
                ]

            }
        ]
    }
}
//now webpack and babel know that I want to transform my es2015 code into vanila JS
//so whatever es2015 code I have in my project it is going to be converted into browser ready JS code
//run webpack and hit enter
