 import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDlGRlrMK2s7BWCV-cgY0AoH2L9VgT5NIw",
    authDomain: "tiktokclone-496ed.firebaseapp.com",
    projectId: "tiktokclone-496ed",
    storageBucket: "tiktokclone-496ed.appspot.com",
    messagingSenderId: "450973139982",
    appId: "1:450973139982:web:2db4b5bc00ceff05d8e85f",
    measurementId: "G-HHBZE5ZWF2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;