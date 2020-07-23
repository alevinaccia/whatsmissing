import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


class Form extends Component {
    state = {
        message: '',
    }

    onChange = (e) => {
        this.setState({ message: e.target.value })
    }

    send = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.send}>
                <input value={this.state.message}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                    name="text"
                    placeholder="What's missing?">
                </input>
                <input className="btn btn-primary" type="submit" />
            </form>
        );
    }
}

export default Form;
