const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
