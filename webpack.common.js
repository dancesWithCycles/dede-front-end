const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
           {
              test: /\.jsx?$/, // search for js files 
              exclude: /node_modules/,
              include: path.resolve(__dirname, 'src'),
              use: ['babel-loader']
           },
           {
              test: /\.css$/,
              use: [
                 // add style to DOM so that style is active and visible
                 "style-loader",
                 // read CSS and load ressources like import or URL
                 "css-loader"]
            },
           {
              test: /\.(png|jp(e*)g|svg)$/,  
              use: [{
                  loader: 'url-loader',
                  options: { 
                      limit: 8000, // Convert images < 8kb to base64 strings
                      name: 'images/[hash]-[name].[ext]'
                  } 
              }]
           }
        ]
    },
    plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    // create an plugin instance so that you can use it several times anywhere
    new HtmlWebpackPlugin({
        title: 'Production',
        // automagically inject all generated bundles into a generated HTML file
        template: "src/index.html"
    }),
    ],
};