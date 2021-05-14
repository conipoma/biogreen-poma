import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA2wxwyk6hYdO1sD9hs6g0ZAUAC-ShVYxo",
    authDomain: "essencial-aromas.firebaseapp.com",
    projectId: "essencial-aromas",
    storageBucket: "essencial-aromas.appspot.com",
    messagingSenderId: "152075731956",
    appId: "1:152075731956:web:dd4dd6aa3851843abe6fa1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
