import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import Router from 'next/router';
import { auth } from '../firebase/firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

@inject('store')
@observer
class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    const { checkAuthUser, updateByPropertyName } = this.props.store;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        checkAuthUser();
      })
      .then(() => {
        Router.push('/');
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };
  render() {
    const { email, password, error } = this.state;
    const { updateByPropertyName } = this.props.store;

    const isInvalid = password === '' || email === '';

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <input
            value={email}
            onChange={event =>
              this.setState(updateByPropertyName('email', event.target.value))
            }
            type="text"
            placeholder="email"
          />
          <input
            value={password}
            onChange={event =>
              this.setState(
                updateByPropertyName('password', event.target.value)
              )
            }
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </Fragment>
    );
  }
}

export default SignInForm;
