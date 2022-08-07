import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyB_cLKlmv9Pp_FrBKTKLnjJrE856WxMrHw",
    authDomain: "mahfuz-quote-generator.firebaseapp.com",
    projectId: "mahfuz-quote-generator",
    storageBucket: "mahfuz-quote-generator.appspot.com",
    messagingSenderId: "203253495579",
    appId: "1:203253495579:web:c409b6a0504fe561cdc5be",
    measurementId: "G-KJEBSGP6TS"
  });

  export const auth = app.auth()
