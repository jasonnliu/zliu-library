// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDB6Y_g7V7XH16ZXUU3xN89xBIhO7tydJ0",
    authDomain: "week7-zhanxu.firebaseapp.com",
    projectId: "week7-zhanxu",
    storageBucket: "week7-zhanxu.appspot.com",
    messagingSenderId: "1082976907112",
    appId: "1:1082976907112:web:c37d547f9a324ac93130dd"
  };

initializeApp(firebaseConfig);

const db = getFirestore()
export default db