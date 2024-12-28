// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8L39zpq7U--QHBDJG_5p_TfYBaPA4DCo",
    authDomain: "coffee-store-d47b5.firebaseapp.com",
    projectId: "coffee-store-d47b5",
    storageBucket: "coffee-store-d47b5.firebasestorage.app",
    messagingSenderId: "421248957054",
    appId: "1:421248957054:web:f95892c260099af6f9f62f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);