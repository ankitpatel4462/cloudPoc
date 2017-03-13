var React = require('react');
var ReactDOM = require('react-dom');
var BlogController = require('./controller/BlogController.jsx');
var MainBlogComponent = require('./components/MainBlogComponent.jsx');

ReactDOM.render(     
<div>  
<BlogController></BlogController>   
  </div>,
  document.getElementById('main')

);        