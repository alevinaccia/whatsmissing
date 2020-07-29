import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ListElement from './ListElement'
// import '../Main.css';

class List extends Component {
  render() {
    return this.props.missings.map((missing) => (
      <ListElement key={missing._id} missing={missing} delMissing={this.props.delMissing}/>
    ));
  }
}

export default List;
