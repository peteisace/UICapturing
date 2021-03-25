'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const resolve = require('resolve');
const paths = require('./paths');
const MiniExtractCssPlugin = require('mini-css-extract-plugin');

module.exports = function(webpackEnv) {
    const isDevelopment = webpackEnv === 'development';
    const isProduction = webpackEnv === 'production';

    console.log(process.env.BUILD_PATH || 'build');

    return {
        mode: isProduction ? 'production' : 'development',
        entry: paths.appIndexJs,
        output: {
            path: paths.appBuild,
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        isDevelopment ? 'style-loader' : MiniExtractCssPlugin.loader,
                        'css-loader',                        
                        'sass-loader',
                      ],
                }
            ]
        },
        plugins: [
            new MiniExtractCssPlugin({
                filename: 'styles.css'                
            })
        ]
    }
}