import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAJRm_y9UMjSHjZZ42QzU9juIDQix9DQSY",
    authDomain: "ecom-ba35e.firebaseapp.com",
    projectId: "ecom-ba35e",
    storageBucket: "ecom-ba35e.firebasestorage.app",
    messagingSenderId: "312181591353",
    appId: "1:312181591353:web:1db586644aba751983ece8",
    measurementId: "G-QQYB875EZP"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };