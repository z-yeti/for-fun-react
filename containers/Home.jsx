import React, { Component, Fragment } from 'react';
import Router from 'next/router';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Yeti extends Component {
  handleSignInClick = () => {
    console.log('sign in page');
  };
  handleSignUpClick = () => {
    Router.push(`/signup`);
  };
  render() {
    const { isSignedIn } = this.props.store;
    return (
      <Fragment>
        {isSignedIn && <p>signed in</p>}
        {!isSignedIn && (
          <Fragment>
            <button onClick={this.handleSignInClick}>SignIn</button>
            <button onClick={this.handleSignUpClick}>SignUp</button>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default Yeti;
