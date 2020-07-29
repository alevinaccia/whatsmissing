import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../components/Form.js';
import List from '../components/List.js';
import Loading from '../components/Loading.js'
//import '../Main.css';

class Main extends Component {

  constructor(req){
    super(req);
    this.state = {
      missings: [],
      loading: true,
      code : req.match.params.code
    }
  }

  async componentDidMount() {
    await fetch('http://localhost:8000', {
      method: 'GET',
      headers : {
        code : this.state.code
      }
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
        _id: id
      }
    }).then(response => response.json())
      .then(data =>  this.setState({missings : Object.values(data)}))
  }

  render() {
    return (
      <div className="App">
        <h1>What's missing?</h1>
        <Form refreshList={this.refreshList} code={this.state.code}/>
        {this.state.loading ? (<Loading />) : (<List missings={this.state.missings} delMissing={this.delMissing} />)}
      </div>
    );
  }
}

export default Main;
