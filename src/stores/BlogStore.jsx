var React = require('react');
var Reflux = require('reflux');
var assign = require('object-assign');
var BlogActions = require('../actions/BlogActions.jsx');
var EventEmitter = require('events').EventEmitter;
var $ = require('jquery');


var BlogStore = Reflux.createStore({

	listenables : [BlogActions],


	init : function(){
		 this.currentTopic="";
		 this.commentList  = {};
		  this.topicList  = {};
	},


	fecthCommentData : function(){
  
		console.log("In ajax calling comment json");  
		var me = this; 
		var resultData = "";
		$.ajax({
			  url: "src/static-data/blogData.json",
			  type: "GET",
			  dataType : "json",
			  cache: false,

			  success: function(data , status ,jQxhr){
			  	var cLength = data.length;
			    console.log("success in fetching comments");
			    	resultData = data;		    	
			    	me.commentList= resultData[cLength-1].comments;
			    	cTopic = resultData[cLength-1].topicTxt;
			    	me.currentTopic = cTopic;
			    	me.triggerUpdate("success",resultData,'C',cTopic);
			  },
			   error: function( jqXhr, textStatus, errorThrown ){
       				 console.log( errorThrown );
   				 }
			});
	},
		/*fecthTopicData : function(){
  
		console.log("In ajax calling topic json");  
		var me = this; 
		var resultData = "";
		$.ajax({
			  url: "src/static-data/topics.json",
			  type: "GET",
			  dataType : "json",
			  cache: false,

			  success: function(data , status ,jQxhr){
			    console.log("success in fetching topic");
			    	console.log(data);
			    	resultData = data;
			    	me.topicList= data;
			    	var tLength = data.length;
			    	me.currentTopic = data.topicTxt;
			    	var cTopic = me.currentTopic;
			    	console.log("------------>",cTopic);
			    	me.triggerUpdate("success",resultData,'T',cTopic);

			  },
			   error: function( jqXhr, textStatus, errorThrown ){
       				 console.log( errorThrown );
   				 }
			});
	},
*/
	addComment : function(newComment,eId,name){
		var me = this;
		var commentList = me.commentList;
		console.log("updating finally");
	var rLength = commentList.length;
	var json = JSON.parse(JSON.stringify({commentId: rLength+1, Name : name , Comment:newComment, emailId:eId}))
	commentList.push(json);
	console.log("*****************added new ", commentList);
	me.triggerUpdate("success",commentList,'updtComment','');

		
	},
	triggerUpdate : function(actionStatus , actionResult,flag,arg){
		if(actionStatus === 'success'){
		this.trigger(actionStatus , actionResult,flag,arg);
		}
	},
  

});

module.exports = BlogStore;