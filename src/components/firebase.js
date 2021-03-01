import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyBkuHWoOpIg-hmqcl-1_DELJROO8whJ7rk",
    authDomain: "react-dashboard-dbac4.firebaseapp.com",
    projectId: "react-dashboard-dbac4",
    storageBucket: "react-dashboard-dbac4.appspot.com",
    messagingSenderId: "876389852436",
    appId: "1:876389852436:web:bfa0c36385cbe763388e01"
  };
 
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
