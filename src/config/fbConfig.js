import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyDM5sjSaiUoJFCoR0Ir9-LshZtcZ38IyF4",
authDomain: "marioplan-c2bec.firebaseapp.com",
projectId: "marioplan-c2bec",
storageBucket: "marioplan-c2bec.appspot.com",
messagingSenderId: "818108043426",
appId: "1:818108043426:web:01f09f01987f52b1c4c7fb",
measurementId: "G-8143MHM5BQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 