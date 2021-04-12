import firebase from "firebase/app";

// firebase の初期化
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBWeOoRxLGXVrqilzyzIxqMTljXW-FuUi8",
    authDomain: "it-jp-fb-test.firebaseapp.com",
    projectId: "it-jp-fb-test",
    storageBucket: "it-jp-fb-test.appspot.com",
    messagingSenderId: "375780304620",
    appId: "1:375780304620:web:a1737f75672bc1ac6227c9"
  };
  firebase.initializeApp(firebaseConfig);
}

