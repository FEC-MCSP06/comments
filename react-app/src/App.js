
import React, { Component } from 'react';
import './App.css';
import CommentSection from './comps/commentsection'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoKey: 3,
      userID: 1
      
    };
  }
  render(){
    return(
      <div>
        <CommentSection
        userID={this.state.userID}
        videoKey = {this.state.videoKey}
        />

        
       
        
        
        
      </div>
    )
  }
}

export default App;
