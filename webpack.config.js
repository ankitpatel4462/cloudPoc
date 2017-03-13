var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './src/index.jsx',
  output: {
    path: __dirname+"/build/",filename: 'bundle.js'
  },
  watch:true,
  module:{
	  loaders:[
	  {
		  test: /.jsx?$/,
		  loader: 'babel-loader',
		  exclude: /node_modules/,
		  query:{
			  presets:['es2015','react']
		  }
	  }]
  }
};

module.exports = config;