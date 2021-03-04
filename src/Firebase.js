import firebase from "firebase";
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBrIHBzN6NNmSfmDuF_H6O8P0DqJHw32F8",
    authDomain: "react-dash-27969.firebaseapp.com",
    databaseURL: "https://react-dash-27969-default-rtdb.firebaseio.com",
    projectId: "react-dash-27969",
    storageBucket: "react-dash-27969.appspot.com",
    messagingSenderId: "754235625266",
    appId: "1:754235625266:web:99f547f3038a394d53512b"
  };
// Initialize Firebase
  var fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();
