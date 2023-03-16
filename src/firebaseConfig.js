
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyCWrTZ7CcUIhRTPdvTXkhBtwCR2X3b8AZI",
    authDomain: "ferr-db21c.firebaseapp.com",
    projectId: "ferr-db21c",
    storageBucket: "ferr-db21c.appspot.com",
    messagingSenderId: "825931316931",
    appId: "1:825931316931:web:b2bf2a78914f1bae69ac76"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)