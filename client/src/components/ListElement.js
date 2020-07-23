import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class ListElement extends Component {
    render() {
        return (
            <h3>{this.props.missing.message}</h3>
        );
    }
}

export default ListElement;
