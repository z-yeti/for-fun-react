import React, { Component, Fragment } from 'react';
import Router from 'next/router';
import { observer, inject } from 'mobx-react';
import SignInUpOutButtons from '../components/SignInUpOutButtons';

@inject('store')
@observer
class Home extends Component {
  updateByPropertyName = (propertyName, value) => ({
    [propertyName]: value
  });
  render() {
    const { authUser } = this.props.store;
    return (
      <Fragment>
        <SignInUpOutButtons />
        {!authUser && <p>Signed Out Right Now</p>}
        {authUser && <p>Signed In Right Now</p>}
      </Fragment>
    );
  }
}

export default Home;
