import React, { Component } from 'react'

class SingleUser extends Component {

     render() {
        return (           
           <li className='one-user'> 
           {this.props.user.nick} 
                <button className='delete'
                    onClick = {this.props.handleDelete.bind(null, this.props.user)}>
                delete
                </button>
            </li>
        )
    }   
}

export default SingleUser