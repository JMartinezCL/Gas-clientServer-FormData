const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: { 
    index:[`${src}/js/index.js`, `${src}/js/scrollReveal.js`, `${src}/css/index.css`  ],
  },  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devServer: {    
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename:`${dist}/index.html`,
      template: './src/html/index.html',
      chunks:['index'] ,
      inlineSource: '.(js|css)$',     
      minify:{
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
    }        
  }),
    new HtmlWebpackInlineSourcePlugin(),
    new CleanWebpackPlugin(),
  ]
};