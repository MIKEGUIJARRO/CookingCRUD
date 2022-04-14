import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB9HGBwG6tudW_2YU6S6_9Qj5L_D8vY6w0",
    authDomain: "cooking-ninja-site-efe9b.firebaseapp.com",
    projectId: "cooking-ninja-site-efe9b",
    storageBucket: "cooking-ninja-site-efe9b.appspot.com",
    messagingSenderId: "542386760621",
    appId: "1:542386760621:web:d1b02f212c8c5c8098cf24"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };