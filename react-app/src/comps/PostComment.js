import React, { Component } from 'react';


class PostComment extends Component{
    // console.log()
    constructor(props){
        super(props);
        this.state = {
            post:'testing this out',
        }
    }
    async PostSend(){
        console.log({
            id: this.props.userID, post: this.state.post, videoKey: this.props.videoKey
         })
        fetch(`http://localhost:3208/api/comments/`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
             id: this.props.userID, post: this.state.post, videoKey: this.props.videoKey
          })
        })
        .then(result=>
          result.text()
    )
           .then(result =>{
               console.log(result)
            //    this.setState({
                  
            //  })
           })   
    }
    render(){
        return(
            <form>
                <div>
                   <textarea></textarea> 
                </div>
                <button onClick= {()=>{this.PostSend()}}>comment</button>
                <button>cancel</button>
            </form>
        )

    }
    
}

export default PostComment;