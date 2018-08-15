import React, { Component, Fragment } from 'react';
import Router from 'next/router';
import { observer, inject } from 'mobx-react';
import SignInUpOutButtons from '../components/SignInUpOutButtons';

@inject('store')
@observer
class Home extends Component {
  render() {
    return <SignInUpOutButtons />;
  }
}

export default Home;
