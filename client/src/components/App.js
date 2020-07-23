import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form.js';
import List from './List.js';
import Loading from './Loading.js'
import '../App.css';

class App extends Component {

  state = {
    missings : [],
    loading : true,
  }

  async componentDidMount(){
    const url = 'http://localhost:8000';
    await fetch(url, {
      method : 'GET'
    }).then((response) => response.json())
    .then(response => {
      this.setState({missings : response, loading : false})
    }) 
  }

  render() {
    return (
      <div className="App">
        <h1>What's missing?</h1>
        <Form />
        {this.state.loading ? (<Loading />) : (<List missings={this.state.missings}/>)}
      </div>
    );
  }
}

export default App;
