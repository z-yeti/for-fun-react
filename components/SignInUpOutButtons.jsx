import React, { Component, Fragment } from 'react';
import Router from 'next/router';
import { observer, inject } from 'mobx-react';
import { auth } from '../firebase/firebase';

@inject('store')
@observer
class SignInUpOutButtons extends Component {
  handleSignInClick = () => {
    Router.push(`/signin`);
  };
  handleSignUpClick = () => {
    Router.push(`/signup`);
  };
  handleSignOutClick = () => {
    auth
      .signOut()
      .then(function() {
        Router.push(`/`);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    const { authUser } = this.props.store;
    return (
      <Fragment>
        {authUser && (
          <button onClick={this.handleSignOutClick}>Sign Out</button>
        )}
        {!authUser && (
          <Fragment>
            <button onClick={this.handleSignInClick}>Sign In</button>
            <button onClick={this.handleSignUpClick}>Sign Up</button>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default SignInUpOutButtons;
