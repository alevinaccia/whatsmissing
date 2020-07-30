import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CodeFrom from '../components/CodeForm.js'
import UserMessage from '../components/UserMessage.js'
import styles from '../styles/enterPage.module.css'

class CodeIn extends Component {
    state = {
        redirect: null,
        loading: false,
        userMessage : null
    }

    create = (code) => {
        if(code !== '' && code.length >= 4){
            fetch('http://localhost:8000/code', {
                method: 'POST',
                headers: {
                    code: code
                }
            }).then(response => {
                if (response.status === 200) {
                    this.setState({ redirect: `./Main/${code}` })
                    window.localStorage.setItem('savedCode', code);
                }else{
                    response.json().then(data =>  this.setState({userMessage : data.message}));
                }
            })
        }else{
            this.setState({userMessage : 'Insert a valid code!'})
        }  
    }

    enter = (code) => {
        fetch('http://localhost:8000/code', {
            method: 'GET',
            headers: {
                code: code
            }
        }).then(response => {
            if (response.status === 200) {
                window.localStorage.setItem('savedCode', code);
                this.setState({ redirect: `./Main/${code}` })
            }else{
                response.json().then(data =>  this.setState({userMessage : data.message}));
            }
        })
    }

    render() {
        if (!this.state.redirect) {
            return (
                < div className="App" >
                    <h1>Enter with your code or create one</h1>
                    {this.state.userMessage ? (<UserMessage className='alert alert-danger' content={this.state.userMessage} />) : ('')}
                    <CodeFrom create={this.create} enter={this.enter} />
                    <p className={styles.ux}>The code must be at least 4 characters long!</p>
                </div >
            );
        } else {
            return <Redirect to={this.state.redirect}></Redirect>
        }

    }
}

export default CodeIn;
