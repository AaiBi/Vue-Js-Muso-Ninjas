// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAhZj69jRIwFodpkmxpBLdSm-badYMajJ4",
    authDomain: "muso-ninjas-73b65.firebaseapp.com",
    projectId: "muso-ninjas-73b65",
    storageBucket: "muso-ninjas-73b65.appspot.com",
    messagingSenderId: "697772702882",
    appId: "1:697772702882:web:af6242272e6a3fc2802bfb"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const projectStorage = firebase.storage()

export { projectAuth, projectFirestore, timestamp, projectStorage }