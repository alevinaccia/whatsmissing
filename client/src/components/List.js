import React, { Component } from 'react';
import ListElement from './ListElement'

class List extends Component {
  render() {
    return this.props.missings.map((missing) => (
      <ListElement key={missing._id} style={this.props.styles} missing={missing} delMissing={this.props.delMissing}/>
    ));
  }
}

export default List;
