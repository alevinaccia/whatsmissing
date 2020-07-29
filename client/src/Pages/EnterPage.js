import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CodeFrom from '../components/CodeForm.js'
//import '../enterPage.css'

class CodeIn extends Component {
    state = {
        redirect: null,
        loading: false
    }

    create = () => {

    }

    enter = (code) => {
        fetch('http://localhost:8000/code', {
            method : 'POST',
            headers : {
                code : code
            }
        }).then(response => {
            if(response.status == 200){
                this.setState({redirect : `./Main`})
            }
        })
    }

    render() {
        if (!this.state.redirect) {
            return (
                < div className="App" >
                    <h1>Enter with your code or create one</h1>
                    <CodeFrom create={this.create} enter={this.enter} />
                </div >
            );
        }else {
            return <Redirect to={this.state.redirect}></Redirect>
        }

    }
}

export default CodeIn;
