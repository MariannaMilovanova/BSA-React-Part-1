import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form  className='user-form' onSubmit = {this.props.handleSubmit}>
                <input placeholder="You Party Name" className='user-input' value = {this.props.value} onChange = {this.props.handleChange} />
                <button className = 'user-btn'>
                   Add Guest
                </button>
            </form>)
    }
}

export default Form
