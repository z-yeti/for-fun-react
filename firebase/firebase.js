import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDiZTqGx1SmGaI-iLbzquL_K_yptmmx5Nc',
  authDomain: 'arts-of-the-yeti-b277d.firebaseapp.com',
  databaseURL: 'https://arts-of-the-yeti-b277d.firebaseio.com',
  projectId: 'arts-of-the-yeti-b277d',
  storageBucket: 'arts-of-the-yeti-b277d.appspot.com',
  messagingSenderId: '86229705142'
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
