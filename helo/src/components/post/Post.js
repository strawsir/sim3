import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from '../nav/Nav';

class Post extends Component {
  

    render() {
      
        return (
            <div>
                <Nav/>
           <h1>Post</h1>
            </div> 
        )
    }
}

export default Post;