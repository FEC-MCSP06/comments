
import React, { Component } from 'react';
import './App.css';
import CommentSection from './comps/commentsection'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoKey: 1,
      userID: 1
      
    };
    this.keyGrabber = this.keyGrabber.bind(this)
  }

  keyGrabber(videoKey){
    this.setState({
      videoKey: videoKey
    })
  }
  render(){
    return(
      <div>
        <CommentSection
        userID={this.state.userID}
        videoKey = {this.state.videoKey}
        keyGrabber = {this.state.keyGrabber}
        />

      </div>
    )
  }
}

export default App;
