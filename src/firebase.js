// Import the functions you need from the SDKs you need
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup } from 'firebase/auth'
import 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSvqsKyIqf-_xAg506NV8hYDpB_aznHUw",
  authDomain: "facebook-270b0.firebaseapp.com",
  projectId: "facebook-270b0",
  storageBucket: "facebook-270b0.appspot.com",
  messagingSenderId: "504721966317",
  appId: "1:504721966317:web:6ce00a7caec0c93f6878e4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();



export {auth,provider,signInWithPopup};
 export default db;
