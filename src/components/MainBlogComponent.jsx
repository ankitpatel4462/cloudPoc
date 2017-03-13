var React = require ('react');
var Reflux = require('reflux');
var BlogStore = require('../stores/BlogStore.jsx');
var BlogAction = require('../actions/BlogActions.jsx');


var MainBlogComponent = React.createClass( {


 
	addNewComment : function(e){
		var me = this;
		console.log("adding a new comment");
		var newComment = ($('#newCommentText').val());
		var eId = ($('#eIdText').val());
		var name  = ($('#nameText').val());
		var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		var valid = false;

		if (newComment.trim() !=null && eId.trim() != null && name.trim() != null && newComment.trim() != "" && eId.trim() != "" && name.trim() != ""){
					valid = true;
		}else{
					valid = false;
		}
		


		if(eId.match(pattern)){
				valid = true;
				
				}
			else
				{
					valid = false;
					$('#eIdText').addClass("form-control-danger");
					
				}	
	console.log(valid);
		if(valid == true){

		BlogAction.addComment(newComment,eId,name);
			}
	
	},

	render:function(){
		console.log(" render function My blog component");

		var commentList = this.props.commentList;
		console.log(commentList);
		var cList = commentList.map(function(commentTxt){
			return <li className = "list-group-item" key = {commentTxt.commentId}> <b>{commentTxt.Name} :</b>{commentTxt.Comment}</li>
		});
		
		var topicList = this.props.topicList;
		console.log(topicList);
		var tList = topicList.map(function(topicsListTxt){
			return <li className = "list" key = {topicsListTxt.topicId}>{topicsListTxt.topicTxt}</li>
		});



	return(
		<div className = "container-fluid">
			<div>
				<h2>Techie Discussion Board</h2>
			</div>

			<div>
				<h3>Today&apos;s Hot topic  for discussion</h3>
			</div>

			<div className="container-fluid">

			 	<div className="row">
				   <div className = "col-xs-9">
						<div className="panel panel-primary">
    					 	<div className="panel-heading">
    					 		Discussion board
    					  	</div>
      						<div className="panel-body">
								<div className="well well-sm">
									{this.props.currentTopic}
								</div>
								<div className="container-fluid">
								  <ul className="list-group">
								    {cList}
								    </ul>
								</div>
								<div className="container-fluid">
						  	<h4>Enter your comment <sup style={{color : "red"}}>* all fields are mandatory</sup> </h4>

						  <form className="form-horizontal">
						    <div className="form-group">
						      <label className="control-label col-sm-2">Email:</label>
						      <div className="col-sm-8">
						        <input type="email" className="form-control" id ="eIdText" placeholder="Enter email"></input>
						      </div>
						    </div>
						    <div className="form-group">
						      <label className="control-label col-sm-2">Name:</label>
						      <div className="col-sm-8">          
						        <input type="text" className="form-control" id="nameText" placeholder="Enter Name"></input>
						      </div>
						    </div>
						    <div className="form-group">
						      <label className="control-label col-sm-2">comment:</label>
						      <div className="col-sm-8">          
						        <textarea type="text" className="form-control"  id="newCommentText" placeholder="Enter Comment"></textarea>
						      </div>
						    </div>
						    <div className="form-group">        
						      <div className="col-sm-offset-2 col-sm-8">
						        <button type="button" className="btn btn-default" onClick ={this.addNewComment} >Submit</button>
						      </div>
						    </div>
						  </form>
						</div>
							
      					</div>
					</div>
    					
					</div>
					<div className="col-xs-3">
						<div className="panel panel-primary">
    					 	<div className="panel-heading">
    					  		Latest thread
    					  	</div>						
								<div className="container-fluid">
								  <ul className="list">
								   {tList}
								  </ul>
								

      						</div>
    					</div>
    				</div>
				</div>
			</div>	
		</div>	
		
		)

}
});

module.exports = MainBlogComponent;   