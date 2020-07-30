import React, { Component } from 'react';
import styles from '../styles/userMessage.module.css'

class UserMessage extends Component {
    render() {
        return (
        <div className={`${this.props.className} ${styles.uxMessage}`}>{this.props.content}</div>
        );
    }
}

export default UserMessage;