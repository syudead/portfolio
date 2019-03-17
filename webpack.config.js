const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
    new HtmlWebpackPlugin({
      title: 'portfolio',
    }),
    new HtmlWebpackPlugin({
      title: 'portfolio',
      filename: '404.html',
    }),
    new CopyWebpackPlugin([{
      from: 'static/', to: '.',
    }])
  ],
  devServer: {
    contentBase: ['static']
  }
}
