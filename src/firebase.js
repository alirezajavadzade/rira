// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3FU3ZCzK0RnpSFsWw_I7PJtN7aztEOE8",
    authDomain: "rira-afacf.firebaseapp.com",
    projectId: "rira-afacf",
    storageBucket: "rira-afacf.appspot.com",
    messagingSenderId: "82295428370",
    appId: "1:82295428370:web:dcb2e4cc93e04bb679cfcb",
    measurementId: "G-PD395Z0ER5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)

import { getStorage } from "firebase/storage"
const storage = getStorage(app)

export { storage }