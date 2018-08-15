import { action, observable } from 'mobx';
import { auth } from './firebase/firebase';

let store = null;

class Store {
  @observable
  authUser = null;

  @action
  checkAuthUser = () => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.authUser = authUser;
      } else {
        this.authUser = null;
      }
    });
  };
  @action
  updateByPropertyName = (propertyName, value) => ({
    [propertyName]: value
  });
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
