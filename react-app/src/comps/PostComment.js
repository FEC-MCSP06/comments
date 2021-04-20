import React, { Component } from 'react';


class PostComment extends Component{
    // console.log()
    constructor(props){
        super(props);
        this.state = {
            post:null,
        }
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            post: e.target.value
        })
    }

    async PostSend(){
        
        fetch(`http://localhost:3208/api/comments/`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
             id: this.props.userID, post: this.state.post, videoKey: this.props.videoKey
          })
        })
    }

    render(){
        return(
            <form>
                <div>
                   <textarea onChange ={(e)=>{this.handleChange(e)}}></textarea> 
                </div>
                <button onClick= {()=>{this.PostSend()}}>comment</button>
                <button>cancel</button>
            </form>
        )

    }
    
}

export default PostComment;