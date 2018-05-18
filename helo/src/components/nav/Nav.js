import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props) {
    return (
        <div className='Nav'>
            <br/>
            {props.username}
            <br/>
            <Link to='/dashboard'>HOME</Link>
            <br/>
            <Link to='/new'>NEW POST</Link>
            <br/>
            <Link to='/'>LOGOUT</Link>
        </div> 
    )
}

function mapStateToProps(state){
    return{
        username: state.username,
        img: state.img
    }
}

export default connect(mapStateToProps)(Nav);