var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: './app/index.js',

  output: {
    filename: 'bundle.js',
    path: '/Users/decolo/ReactProject/cc-react-todo/build'
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 8900
  },
  plugins: [
    new OpenBrowserPlugin({
      url: 'http://localhost:8900'
    })
  ],
  devtool: 'source-map',
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
        test: /\.(png|jpg)$/,
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
