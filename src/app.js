import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserList from './user_list';
import Form from './user_add';
let id = 0;
let forShouldComponentUpdateOnly = 0;
let newUser;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [{id: id, nick: "Mickey Mouse - Party Maker"}] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(event) {
        newUser = event.target.value;
    }

    handleSubmit(event) {  
        event.preventDefault();
        this.state.users.push({id: ++id, nick: newUser});
        this.setState({users: this.state.users});
        forShouldComponentUpdateOnly = 1;
    }
    handleDelete(userToBeDeleted) {
        let userDel = this.state.users.filter((user) =>{
            return user != userToBeDeleted
        });
        this.setState({users: userDel});
    }
    shouldComponentUpdate(nextProps, nextState) {
        return forShouldComponentUpdateOnly == 1
    }

    render() {
        return (
            <div className='body-ofThePage'>
                <h1 className='header'> Join the club! Party Hard!</h1>
                <p className='sub-header'>Add your NickName to the party guests! Make sure that you are truly U.N.I.Q.U.E. guy ;)</p>
                <img className='img' src='https://raw.githubusercontent.com/MariannaMilovanova/pictures/master/glass.png'/>
                <Form 
                    handleSubmit = {this.handleSubmit} 
                    handleChange = {this.handleChange}
                    users = {this.state.users}
                    />
                <UserList 
                    handleDelete = {this.handleDelete}
                    users = {this.state.users} />
            </div>
        )
    }
}


export default App