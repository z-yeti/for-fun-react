import React, { Component, Fragment } from 'react';
import Router from 'next/router';
import { observer, inject } from 'mobx-react';

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
    console.log('sign out happens here');
  };
  render() {
    const { isSignedIn } = this.props.store;
    return (
      <Fragment>
        {isSignedIn && (
          <button onClick={this.handleSignOutClick}>Sign Out</button>
        )}
        {!isSignedIn && (
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
