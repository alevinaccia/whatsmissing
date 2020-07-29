import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Main.css';

class ListElement extends Component {

    constructor(props) {
        super(props);
        this.state = { missing: props.missing };
    }

    changeCheck = (id, current) => {
        fetch('http://localhost:8000/', {
            method: 'PATCH',
            headers: {
                _id: id,
                current: current
            }
        }).then(response => response.json())
            .then(updatedMissing => {
                this.setState({ missing: updatedMissing })
            });
    }

    render() {
        const { completed, _id, message } = this.state.missing;
        return (
            <h3 className="listElement">
                <input type="checkbox"
                    checked={completed}
                    onChange={this.changeCheck.bind(this, _id, completed)}
                    className="checkBox"
                />
                <span className={completed ? ('completed') : ('')}>{message}</span>
                <input type="button"
                    onClick={this.props.delMissing.bind(this, _id)}
                    value="Remove"
                    className="delBTN btn btn-danger"
                />
            </h3>
        );
    }
}

export default ListElement;
