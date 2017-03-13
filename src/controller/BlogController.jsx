var React = require('react');
var Reflux = require('reflux');
var BlogStore = require('../stores/BlogStore.jsx');
var MainBlogComponent = require('../components/MainBlogComponent.jsx');
var BlogActions = require('../actions/BlogActions.jsx');

var BlogController = React.createClass({

	mixins : [Reflux.listenTo(BlogStore,'onBlogStoreChange')],
	
	

		getInitialState : function(){
			console.log("In intial state of Blog controller");
			return( {
				commentList:[],
				topicList:[],
				currentTopic:""
			})
		},


		onBlogStoreChange:function(actionStatus,actionResult,flag,arg){
			var me = this;
			if(actionStatus === 'success' && flag === 'C'){
				var cLength = actionResult.length;
					me.setState({commentList:actionResult[cLength-1].comments,
								currentTopic:actionResult[cLength-1].topicTxt,
								topicList:actionResult
							});
			}

			if(actionStatus === 'success' && flag === 'updtComment'){
				var cLength = actionResult.length;
				console.log(actionResult);
					me.setState({commentList:actionResult});
			}
		},

	getComments : function(){
		console.log("initial state set in controller");

		return getComments();
	
	},
	   
	  onChange: function() {
    		this.setState(getComments());
    		console.log("New State");
    		
  		},

	 componentDidMount: function() {
	 	console.log("here");
	 	
    	BlogStore.fecthCommentData();
    	
  },
   componentWillUnmount: function() {
    	
    	
  },

 
	render: function(){
		console.log(this.state.commentList);

		return(
				<div className="container">
						<MainBlogComponent commentList = {this.state.commentList} topicList = {this.state.topicList} currentTopic = {this.state.currentTopic}></MainBlogComponent>
				</div>
			)
	}
})

module.exports = BlogController;