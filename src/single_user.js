import React, { Component } from 'react'

class SingleUser extends Component {
     render() {
        return (           
           <li className='one-user'> 
           {this.props.user} 
                <a href = '#' className='delete'
                    onClick = {this.props.handleDelete.bind(null, this.props.user)}>
                delete
                </a>
            </li>
        )
    }   
}

export default SingleUser