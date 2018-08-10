import firebase from 'firebase'
import firestore from 'firebase/firestore'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBsgVQYSTL819feKi8q0GTHOxujSZnz2gA",
    authDomain: "finance-and-accounting-41e75.firebaseapp.com",
    databaseURL: "https://finance-and-accounting-41e75.firebaseio.com",
    projectId: "finance-and-accounting-41e75",
    storageBucket: "",
    messagingSenderId: "389444915914"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

// export firestore database
export default  firebaseApp.firestore()
