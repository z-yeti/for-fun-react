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
    const { authUser, location } = this.props.store;
    return (
      <Fragment>
        <SignInUpOutButtons />
        {!authUser && <p>Signed Out Right Now</p>}
        {authUser && (
          <Fragment>
            <p>Signed In Right Now</p>
            <p>{location.lat}, {location.lng}</p>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default Home;
