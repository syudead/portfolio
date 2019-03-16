const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: `./src/app.js`,

  mode: 'development',
  output: {
    // path: `${__dirname}/dist`,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin(),
  ]
}