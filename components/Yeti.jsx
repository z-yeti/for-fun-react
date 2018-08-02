import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Yeti extends Component {
  render() {
    const { greeting } = this.props.store;
    return <p>{greeting}</p>;
  }
}

export default Yeti;
