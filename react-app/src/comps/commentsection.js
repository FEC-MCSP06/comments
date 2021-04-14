import React, { Component } from 'react';
import Comments from './Comments';
import PostComment from './PostComment';

class CommentSection extends Component {
    constructor(props){
      super(props);
      this.state = {
          userID: this.props.userID,
          videoKey : this.props.videoKey,
          comments: [],
          pinned: []
      };
    }
async componentDidMount(){
    fetch(`http://localhost:3208/api/comments/${this.state.videoKey}`)
        .then(result=>
              result.json()
        )
               .then(result =>{
                   this.setState({
                      comments : result,
                 })
               }
             )
}

    render(){
      return(
        <div>

            <PostComment
            userID = {this.state.userID}
            />
            <Comments 
            comments = {this.state.comments}
            />
          
          
          
        </div>
      )
    }
  }
  
  export default CommentSection
//notes add comp for post comments and one fro view comments perhaps pinned 