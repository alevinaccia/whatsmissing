import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../form.css'

class CodeForm extends Component {

    state = {
        input: ''
    }

    update = (e) => {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <form>
                <input type="Text" value={this.state.input} onChange={this.update} />
                <input type="Button" className='btn btn-primary btn-lg disabled' defaultValue="Create"
                    onClick={this.props.create} />
                <input type="Button" className='btn btn-secondary btn-lg disabled' defaultValue="Enter"
                    onClick={this.props.enter.bind(this, this.state.input)} />
            </form>
        );
    }
}

export default CodeForm;