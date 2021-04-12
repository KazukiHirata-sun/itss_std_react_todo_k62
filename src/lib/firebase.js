import firebase from 'firebase';

// firebase の初期化
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBFV1aHlArGg48svIZKJ_q4LM3Vl8MdDfs",
    authDomain: "it-japanese-fb.firebaseapp.com",
    projectId: "it-japanese-fb",
    storageBucket: "it-japanese-fb.appspot.com",
    messagingSenderId: "1022026944059",
    appId: "1:1022026944059:web:6c7cdc5492542d520dd61e"
  };
  firebase.initializeApp(firebaseConfig);
}
