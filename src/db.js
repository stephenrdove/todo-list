import { initializeApp } from 'firebase/app'
import {
    getFirestore
} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGryymBHShv_-BEOvrTZMuI3Hslzucu5k",
    authDomain: "dove-javascript-training.firebaseapp.com",
    projectId: "dove-javascript-training",
    storageBucket: "dove-javascript-training.appspot.com",
    messagingSenderId: "545170324441",
    appId: "1:545170324441:web:a3bebdcf854a5ff9de77c8",
    measurementId: "G-5FNHZXPGJB"
  };

// init firebase app
initializeApp(firebaseConfig);

// init service
const db = getFirestore();
export default db;