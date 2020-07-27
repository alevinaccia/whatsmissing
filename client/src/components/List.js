import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListElement from './ListElement'
import '../App.css';

class List extends Component {
  render() {
    return this.props.missings.map((missing) => (
      <ListElement key={missing.id} missing={missing} delMissing={this.props.delMissing}/>
    ));
  }
}

export default List;
