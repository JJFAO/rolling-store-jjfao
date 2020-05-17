import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database

const firebaseConfig = {
    apiKey: "AIzaSyBh54YRcjmm5o_AmOTadMmWXwLsCBYC8vg",
    authDomain: "rolling-store-jjfao.firebaseapp.com",
    databaseURL: "https://rolling-store-jjfao.firebaseio.com",
    projectId: "rolling-store-jjfao",
    storageBucket: "rolling-store-jjfao.appspot.com",
    messagingSenderId: "223094556341",
    appId: "1:223094556341:web:4ea86327d8af49c00c60fc"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseApp = firebase;

  export { firebaseApp } ;