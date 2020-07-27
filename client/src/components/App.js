import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form.js';
import List from './List.js';
import Loading from './Loading.js'
import '../App.css';

class App extends Component {

  state = {
    missings: [],
    loading: true,
  }

  async componentDidMount() {
    await fetch('http://localhost:8000', {
      method: 'GET'
    }).then((response) => response.json())
      .then(response => {
        this.setState({ missings: response, loading: false })
      })
  }

  refreshList = (list) => {
    this.setState({ missings: list });
  }

  delMissing = (id) => {
    fetch('http://localhost:8000/', {
      method: 'DELETE',
      headers: {
        id: id
      }
    }).then(response => response.json())
      .then(data => this.setState({missings : data}))
  }

  render() {
    return (
      <div className="App">
        <h1>What's missing?</h1>
        <Form missings={this.refreshList} />
        {this.state.loading ? (<Loading />) : (<List missings={this.state.missings} delMissing={this.delMissing} />)}
      </div>
    );
  }
}

export default App;
