import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyD9NBIviZB9TezxrmQPV44ps8NbXXecscs",
    authDomain: "crwn-db-5d64f.firebaseapp.com",
    projectId: "crwn-db-5d64f",
    storageBucket: "crwn-db-5d64f.appspot.com",
    messagingSenderId: "143023942088",
    appId: "1:143023942088:web:e002285174ced8e85538fd",
    measurementId: "G-L3GN6GD7LV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;