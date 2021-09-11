import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default Object.freeze({
    firebaseConfig : {
        apiKey: "AIzaSyDYDj54YYeyLAyOjhT3uoOBYSzwi2yxtuI",
        authDomain: "expensemanager-c2aab.firebaseapp.com",
        projectId: "expensemanager-c2aab",
        storageBucket: "expensemanager-c2aab.appspot.com",
        messagingSenderId: "888385908218",
        appId: "1:888385908218:web:c51b16fc6007c719fd4843",
        measurementId: "G-V1B7KYEJM9"
      },
    firebase : initializeApp({
        apiKey: "AIzaSyDYDj54YYeyLAyOjhT3uoOBYSzwi2yxtuI",
        authDomain: "expensemanager-c2aab.firebaseapp.com",
        projectId: "expensemanager-c2aab",
        storageBucket: "expensemanager-c2aab.appspot.com",
        messagingSenderId: "888385908218",
        appId: "1:888385908218:web:c51b16fc6007c719fd4843",
        measurementId: "G-V1B7KYEJM9"
      }),    
  });