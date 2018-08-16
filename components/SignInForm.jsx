import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import Router from 'next/router';
import { auth } from '../firebase/firebase';

const INITIAL_STATE = {
  email: process.env.SAMPLE_EMAIL,
  password: process.env.SAMPLE_PASSWORD,
  error: null
};

@inject('store')
@observer
class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  handleGeolocation = () => {
    if (navigator.geolocation) {
      const options = { timeout: 60000 };
      navigator.geolocation.getCurrentPosition(
        this.getLatLng,
        this.errorHandler,
        options);
    } else {
      alert("Sorry, browser does not support geolocation!");
    }
  }
  getLatLng = (pos) => {
    const { coords: { latitude, longitude } } = pos;
    this.props.store.setLatLng(latitude, longitude);
  }
  errorHandler = (err) => {
    if (err.code === 1) {
      alert('Geoloction was declined, please search manually')
    } else if (err.code === 2 || err.code === 3) {
      alert('Geoloction encountered an error, please search manually')
    }
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
      .then(() => {
        this.handleGeolocation();
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
