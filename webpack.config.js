const path = require('path');

module.exports = {
  entry: './src/main.jsx',
  mode:'development',
//   mode:'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true
  },

  module:{
    rules: [
        {
          test: /\.jsx$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env',"@babel/preset-react"]
            }
          }
        }
      ],
  },
  
};