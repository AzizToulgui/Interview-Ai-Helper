// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0MmQN8KfcRg0Q1Dhh7ELz7LeTxbHK6KE",
    authDomain: "mocklyai-f47fe.firebaseapp.com",
    projectId: "mocklyai-f47fe",
    storageBucket: "mocklyai-f47fe.firebasestorage.app",
    messagingSenderId: "561831021314",
    appId: "1:561831021314:web:2d058c43e94559d5f9d01b",
    measurementId: "G-1DF69DY765"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);