import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../components/Form.js';
import List from '../components/List.js';
import Loading from '../components/Loading.js'
import styles from '../styles/Main.module.css';

class Main extends Component {

  constructor(req) {
    super(req);
    this.state = {
      missings: [],
      loading: true,
      code: req.match.params.code,
      redirect: null
    }
  }

  async componentDidMount() {
    await fetch('http://localhost:8000', {
      method: 'GET',
      headers: {
        code: this.state.code
      }
    }).then((response) => response.json())
      .then(data => {
        this.setState({ missings: data, loading: false })
      })
  }

  refreshList = (element) => {
    this.setState({ missings: [element, ...this.state.missings] });
  }

  delMissing = (id) => {
    fetch('http://localhost:8000/', {
      method: 'DELETE',
      headers: {
        _id: id,
        code: this.state.code
      }
    }).then(response => response.json())
      .then(data => this.setState({ missings: Object.values(data) }))
  }

  logout = () => {
    window.localStorage.removeItem('savedCode');
    this.setState({redirect : '/'})
  }

  render() {
    if (!this.state.redirect) {
      return (
        <div className="App">
          <h1>What's missing?</h1>
          <Form refreshList={this.refreshList} code={this.state.code} />
          {this.state.loading ? (<Loading />) : (<List missings={this.state.missings} styles={styles} delMissing={this.delMissing} />)}
          <footer className={styles.footer}><button onClick={this.logout} className={`${styles.footerButton} btn btn-danger`}>Logout</button></footer>
        </div>
      )
    } else {
      return <Redirect to={this.state.redirect}/>
    }
  }
}

export default Main;
