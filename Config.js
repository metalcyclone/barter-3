import firebase from 'firebase';
require('@firebase/firestore') 

var firebaseConfig = {
    apiKey: "AIzaSyB-XD97fUUjslcenSk22wDrPqYaDIML5wI",
    authDomain: "barter-app-9392e.firebaseapp.com",
    databaseURL: "https://barter-app-9392e.firebaseio.com",
    projectId: "barter-app-9392e",
    storageBucket: "barter-app-9392e.appspot.com",
    messagingSenderId: "162891668541",
    appId: "1:162891668541:web:0655033efd5c15582e9e54",
    measurementId: "G-DNCMHPTZJ7"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase.firestore();