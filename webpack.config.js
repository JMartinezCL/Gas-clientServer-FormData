const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const src = path.resolve(__dirname, 'src');

module.exports = {
  entry: { 
    index:[`${src}/js/index.js`, `${src}/css/index.css` ],
  },
  devtool: 'inline-source-map',
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
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {    
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename:'index.html',          
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