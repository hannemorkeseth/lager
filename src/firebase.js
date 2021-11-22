//import firebase from 'firebase/app'
//import 'firebase/firestore'
//const firebaseConfig = {

// };

// firebase.initializeApp(firebaseConfig);
//export default firebase;
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyCRkr2yNXm6sQUocWcWCMf28KzjYz7QFBQ",
 authDomain: "lager-49d43.firebaseapp.com",
 projectId: "lager-49d43",
 storageBucket: "lager-49d43.appspot.com",
 messagingSenderId: "560599513336",
 appId: "1:560599513336:web:dd67f45ebb8b2e2f77a30d"};

const app =initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db
