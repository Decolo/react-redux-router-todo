var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var path = require('path')

module.exports = {
  entry: './app/index.js',

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'autoprefixer-loader'
        ]
      },
      {
        test: /\.(png|jpg|eot|svg|ttf|woff)$/,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      }
    ]
  }
}
