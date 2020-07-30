import React, { Component } from 'react';

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
            <h3 className={this.props.style.listElement}>
                <input type="checkbox"
                    checked={completed}
                    onChange={this.changeCheck.bind(this, _id, completed)}
                    className={this.props.style.checkBox}
                />
                <span className={completed ? ('completed') : ('')}>{message}</span>
                <input type="button"
                    onClick={this.props.delMissing.bind(this, _id)}
                    value="Remove"
                    className={`${this.props.style.delBTN} btn btn-danger`}
                />
            </h3>
        );
    }
}

export default ListElement;
