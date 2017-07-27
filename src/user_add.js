import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form  className='user-form' onSubmit = {this.props.handleSubmit} >
                <input placeholder="You Party Name" className='user-input'
                        onChange = {this.props.handleChange} />
                <input type="submit"className = 'user-btn' value = 'Add Guest'/>
            </form>)
    }
}

export default Form
