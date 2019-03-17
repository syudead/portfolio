const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const htmlOptions = {
  title: 'portfolio',
  favicon: 'favicon.ico',
}

module.exports = {
  // entry: './src/app.js',

  mode: process.env.NODE_ENV,
  output: {
    // filename: 'app.js',
    path: `${__dirname}/docs`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(htmlOptions),
    new HtmlWebpackPlugin(Object.assign({}, htmlOptions, {
      filename: '404.html',
    })),
    new CopyWebpackPlugin([{
      from: 'static/', to: '.',
    }])
  ],
  devServer: {
    contentBase: ['static'],
    historyApiFallback: true,
  }
}
