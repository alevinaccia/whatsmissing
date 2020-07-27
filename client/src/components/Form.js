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
        const url = 'http://localhost:8000';
        const headers = new Headers();
        headers.append('message', this.state.message);

        fetch(url, {
            method : 'POST',
            headers : headers,
        }).then(response => response.json())
        .then(data => {
            this.props.missings(data);
            this.setState({message : ''})
        })
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
