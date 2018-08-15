import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { auth, db } from '../firebase/firebase';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});
const INITIAL_STATE = {
  username: 'z_yeti',
  email: 'zach.millar@gmail.com',
  passwordOne: 'Poopy123',
  passwordTwo: 'Poopy123',
  secretCode: 'y3t!',
  error: null
};

@inject('store')
@observer
class SignUpForm extends Component {
  doCreateUser = (id, username, email) => {
    db.ref(`users/${id}`).set({
      username,
      email
    });
  };
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    const { handleSignInStatusChange } = this.props.store;
    auth
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.doCreateUser(authUser.user.uid, username, email);
      })
      .then(() => {
        handleSignInStatusChange();
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      secretCode
    } = this.state;

    const isInvalid =
      secretCode !== process.env.SECRET_CODE ||
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <input
            value={username}
            onChange={event =>
              this.setState(
                updateByPropertyName('username', event.target.value)
              )
            }
            type="text"
            placeholder="Username"
          />
          <input
            value={email}
            onChange={event =>
              this.setState(updateByPropertyName('email', event.target.value))
            }
            type="text"
            placeholder="Email"
          />
          <input
            value={passwordOne}
            onChange={event =>
              this.setState(
                updateByPropertyName('passwordOne', event.target.value)
              )
            }
            type="password"
            placeholder="Password"
          />
          <input
            value={passwordTwo}
            onChange={event =>
              this.setState(
                updateByPropertyName('passwordTwo', event.target.value)
              )
            }
            type="password"
            placeholder="Confirm Password"
          />
          <input
            value={secretCode}
            onChange={event =>
              this.setState(
                updateByPropertyName('secretCode', event.target.value)
              )
            }
            type="text"
            placeholder="Secret Code"
          />
          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </Fragment>
    );
  }
}

export default SignUpForm;
