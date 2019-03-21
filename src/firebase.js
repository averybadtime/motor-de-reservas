import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyBl-sVu4sw0Q_nE7Td3JLxTd8xYhtIwcbk",
  authDomain: "motor-de-reservas-ae1a1.firebaseapp.com",
  databaseURL: "https://motor-de-reservas-ae1a1.firebaseio.com",
  projectId: "motor-de-reservas-ae1a1",
  storageBucket: "motor-de-reservas-ae1a1.appspot.com",
  messagingSenderId: "105413207896"
}

firebase.initializeApp(config)

export const db = firebase.database().ref()
export const auth = firebase.auth()