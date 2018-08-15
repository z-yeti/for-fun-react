import { action, observable } from 'mobx';
import { auth } from './firebase/firebase';
import Router from 'next/router';

let store = null;

class Store {
  @observable
  greeting = `Welcome to the Yeti's land`;
  @observable
  isSignedIn = false;

  @action
  handleSignInStatusChange = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.isSignedIn = true;
        Router.push('/');
      } else {
        this.isSignedIn = false;
      }
    });
  };
}

export function initStore(isServer) {
  if (isServer) {
    return new Store(isServer);
  } else {
    if (store === null) {
      store = new Store(isServer);
    }
    return store;
  }
}
