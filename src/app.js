import React, { Component } from 'react';
import UserList from './user_list';
import Form from './user_add';

let forShouldComponentUpdateOnly;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', users: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(event) {
        forShouldComponentUpdateOnly = 1;
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let value = this.state.value;
        for (let user in this.state.users) {
            if (this.state.users.includes(value)) {
                alert(`${this.state.value} already present at the party`);
                this.setState({value: ''})
                return false;
            }
        }
        let newUser = this.state.users.concat(value);

        this.setState({value: '', users: newUser });
        forShouldComponentUpdateOnly = 1;
    }
    handleDelete(userToBeDeleted) {
        let userDel = this.state.users.filter((user) =>{
            return user != userToBeDeleted
        });
        this.setState({users: userDel});
    }
     shouldComponentUpdate(nextProps, nextState) {
        return forShouldComponentUpdateOnly == 1; 
    }
    render() {
        return (
            <div className='body-ofThePage'>
                <h1 className='header'> Join the club! Party Hard!</h1>
                <p className='sub-header'>Add your NickName to the party guests! Make sure that you are truly U.N.I.Q.U.E. guy ;)</p>
                <img className='img' src='https://raw.githubusercontent.com/MariannaMilovanova/pictures/master/glass.png'/>
                <Form 
                    handleSubmit = {this.handleSubmit} 
                    value = {this.state.value}
                    handleChange = {this.handleChange}/>
                <UserList 
                    handleDelete = {this.handleDelete}
                    users = {this.state.users} />
            </div>
        )
    }
}


export default App