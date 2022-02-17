import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDYdYe58kKz5a3tBzAMo9E0exgAZSF2THs",
    authDomain: "crown-db-b9ef3.firebaseapp.com",
    projectId: "crown-db-b9ef3",
    storageBucket: "crown-db-b9ef3.appspot.com",
    messagingSenderId: "454746102207",
    appId: "1:454746102207:web:dfe0c6257b0fc06247e90a",
    measurementId: "G-KQCW4Z01Q8"
  };

  firebase.initializeApp(config);

  export const auth= new firebase.auth();
  export const firestore = new firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle= () => auth.signInWithPopup(provider);

  export default firebase;