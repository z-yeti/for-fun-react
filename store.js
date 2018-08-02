import { action, observable } from 'mobx';

let store = null;

class Store {
  @observable greeting = `Welcome to the Yeti's land`;
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
