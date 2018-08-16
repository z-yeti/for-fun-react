import { action, observable } from 'mobx';
import { auth } from './firebase/firebase';

let store = null;

class Store {
  @observable authUser = null;
  @observable location = {
    lat:null,
    lng:null
  };

  @action setLatLng = (lat, lng) => {
    try {
      lat = parseFloat(lat);
      lng = parseFloat(lng);
    } catch (e) {
      console.warn('Invalid lat/lng', { lat, lng });
    }
    this.location = {
      lat,
      lng
    };
  }
  @action checkAuthUser = () => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.authUser = authUser;
      } else {
        this.authUser = null;
      }
    });
  };
  @action updateByPropertyName = (propertyName, value) => ({
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
