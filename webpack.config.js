const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    'core-js/modules/es.promise',
    'core-js/modules/es.array.iterator',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|bower_components/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules|webpack.config.js/,
        loader: 'eslint-loader',
        options: {
          fix: true
        },
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      Modules: path.resolve(__dirname, './src/modules'),
      Common: path.resolve(__dirname, './src/modules/common')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
