const path = require('path');

module.exports = {
  //entry: ['babel-polyfill', './app/index.js'],
  entry: [
    './app/index.js', 
    /*'./lecture/03/ex1.js',
    './lecture/03/ex2.js',
    './lecture/03/_main.js'*/
    //'./lecture/04/_main.js'
    //'./lecture/05/_main.js'
    //'./lecture/06/_main.js'
    './lecture/07/_main.js'
  ],
	output: {
		path: path.join(__dirname, "build"),
		filename: "bundle.js"
	},
  module : {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'build'),
    inline: true
  }
};