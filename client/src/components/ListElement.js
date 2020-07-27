import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class ListElement extends Component {

    constructor(props){
        super(props);
        this.state = {missing : props.missing};
    }

    changeCheck = (id) => {
        fetch('http://localhost:8000/', {
            method : 'PATCH',
            headers : {
                id : id
            }
        }).then(response => response.json())
        .then(updatedMissing => this.setState({missing : updatedMissing}));
    }

    render() {

        const {completed, id, message} = this.state.missing;

        return (
            <h3 className="listElement">
                <input type="checkbox"
                    checked={completed}
                    onChange={this.changeCheck.bind(this, id)}
                    className="checkBox"
                />
                <span className={completed ? ('completed') : ('')}>{message}</span>
                <input  type="button"
                    onClick={this.props.delMissing.bind(this, id)}
                    value="Remove"
                    className="delBTN btn btn-danger"
                />
            </h3>
        );
    }
}

export default ListElement;
