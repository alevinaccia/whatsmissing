import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/form.module.css'

class CodeForm extends Component {

    state = {
        input: ''
    }

    update = (e) => {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <form className={styles.codeForm}>
                <input type="Text" value={this.state.input} className={styles.codeInputText} onChange={this.update} /><br></br>
                <input type="Button" className={`btn btn-primary btn-lg disabled ${styles.codeInputBTN}`} defaultValue="Create"
                    onClick={this.props.create.bind(this, this.state.input)} />
                <input type="Button" className={`btn btn-secondary btn-lg disabled ${styles.codeInputBTN2}`} defaultValue="Enter"
                    onClick={this.props.enter.bind(this, this.state.input)} />
            </form>
        );
    }
}

export default CodeForm;