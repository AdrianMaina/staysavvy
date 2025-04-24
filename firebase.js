// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDs_w_bAQKyssVuPffsqaPBhwvPwk9fBfM",
    authDomain: "staysavvy-e3973.firebaseapp.com",
    projectId: "staysavvy-e3973",
    storageBucket: "staysavvy-e3973.firebasestorage.app",
    messagingSenderId: "154592727504",
    appId: "1:154592727504:web:b41a27c35f4b80894329d5",
    measurementId: "G-E2NLCPSG2K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
