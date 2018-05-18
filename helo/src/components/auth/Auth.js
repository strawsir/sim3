import React, {Component} from 'react';
import axios from 'axios'
import {updateUser} from '../../ducks/reducer'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Auth extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            users: [],
        }
        this.updatePassword = this.updatePassword.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.newUser=this.newUser.bind(this);
        this.getUsers = this.getUsers.bind(this)
    }

    componentDidMount(){
        axios.get('/auth/users').then(res=>{
            console.log(res.data)
            this.setState({users: res.data})
        })
    }

    newUser(){
        axios.post('/auth/users', {
            username:this.state.username,
            password: this.state.password
        }).then(res=>{
            console.log(res.data)
        })
    }

    getUsers(){
        axios.get('/auth/users').then(res=>{
            console.log(res.data)
            this.setState({users: res.data})
        })
    }

    updateUsername(input){
        this.setState({username : input})
    }
    updatePassword(input){
        this.setState({password : input})
    }
  

    render() {
      const user = this.state.users[0]
        return (
            <div>
           <input className='userName' type="text" placeholder='USERNAME' onChange={(e)=>{this.updateUsername(e.target.value)}}/>
           <input className='passWord' type="text" placeholder='PASSWORD' onChange={(e)=>{this.props.updateUser}}/>
          <Link onClick ={()=>this.props.updateUser(user.id, user.username, user.img)} to='/dashboard'>LOGIN</Link>
           <Link to='/dashboard' onClick ={()=>this.props.updateUser(user.id, user.username, user.img)}>REGISTER</Link>
           <button onClick={()=>console.log(user)}>CLICKY</button>
            </div> 
        )
    }
}


export default connect(null, {updateUser})(Auth);