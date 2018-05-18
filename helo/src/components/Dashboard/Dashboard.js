import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from '../nav/Nav'
import Post from '../post/Post';

class Dashboard extends Component {
  constructor(){
      super();

      this.state={
          myPosts: true,
          posts:[]
      }
  }

    render() {
      
        return (
            <div>
                <Nav/>
           <h1>Dashboard</h1>
                <input type="text" placeholder="SEARCH"/>
                <button>SEARCH</button>
                <button>RESET</button>
                <br/>
                My Posts
                <input type="checkbox"/>
                <br/>
                Posts:
                {this.state.posts.map(post=>{
                    <Post/>
                })}
            </div> 
        )
    }
}

export default Dashboard;