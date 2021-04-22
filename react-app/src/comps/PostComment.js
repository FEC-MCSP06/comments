import React, { Component } from 'react';


class PostComment extends Component{
   
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
                <div className = 'textArea'>
                    <input type='text' onChange ={(e)=>{this.handleChange(e)}} placeholder='Add a public comment...'>
                    </input>
                   
                </div>

                <div className = "btns">
                  <button className= "post" onClick= {()=>{this.PostSend()}}>comment</button>
                <button className = 'cancel'>cancel</button>  
                
                </div>
                
            </form>
        )

    }
    
}

export default PostComment;