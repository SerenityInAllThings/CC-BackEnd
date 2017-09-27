const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};