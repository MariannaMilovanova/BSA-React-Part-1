import React, { Component } from 'react'
import SingleUser from './single_user'

class UserList extends Component {
    render() {
        return (
            <ol className = 'user-list'>
                { this.props.users.map((user, current) => {
                    return (
                       <SingleUser 
                         key={user.id} 
                         handleDelete = {this.props.handleDelete} 
                         user = {this.props.users[current]}
                         />
                    )
                })
            }
            </ol>
        )
    }
} 

export default UserList