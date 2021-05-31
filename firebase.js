// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyACTUeYaxj9NmzS1zk8QIBe0dwg8hR7YQo",
    authDomain: "maestra-d278e.firebaseapp.com",
    projectId: "maestra-d278e",
    storageBucket: "maestra-d278e.appspot.com",
    messagingSenderId: "364319900304",
    appId: "1:364319900304:web:24533ecef404a178d50e15",
    measurementId: "G-5JZP7TDD95"
  };

  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();

  export { firebaseConfig, db};