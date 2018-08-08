import firebase from 'firebase'
import firestore from 'firebase/firestore'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBGom0ohIzuGLCfFOdXZ2Aak7jySBHannI",
    authDomain: "firstvueapp.firebaseapp.com",
    databaseURL: "https://firstvueapp.firebaseio.com",
    projectId: "firstvueapp",
    storageBucket: "firstvueapp.appspot.com",
    messagingSenderId: "31780013180"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

// export firestore database
export default  firebaseApp.firestore()
