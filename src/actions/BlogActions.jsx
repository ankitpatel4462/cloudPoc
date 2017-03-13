var React = require('react');
var Reflux = require('reflux');

var BlogActions = Reflux.createActions([

	'fecthCommentData',
	'addComment',
	'deleteComment',
	'fecthTopicData'
]);

module.exports = BlogActions;