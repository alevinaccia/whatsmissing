import React, { Component } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import '../Main.css';


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
        headers.append('code', this.props.code)

        fetch(url, {
            method : 'POST',
            headers : headers,
        }).then(response => response.json())
        .then(data => {
            console.log(Object.values(data))
            this.props.refreshList(data);
            this.setState({message : ''})
        })
    }

    formStyle = {

    }

    render() {
        return (
            <form onSubmit={this.send}>
                <input value={this.state.message}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                    name="text"
                    required
                    placeholder="What's missing?">
                </input>
                <input className="btn btn-primary" type="submit" />
            </form>
        );
    }
}

export default Form;
