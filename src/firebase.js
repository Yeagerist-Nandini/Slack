import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAQcwxdoOmvBOigmHhZ5RH9O7k-pkSZ2uo",
  authDomain: "slack-eac9f.firebaseapp.com",
  projectId: "slack-eac9f",
  storageBucket: "slack-eac9f.appspot.com",
  messagingSenderId: "174768753892",
  appId: "1:174768753892:web:b51859a10aa471d147f0f1",
  measurementId: "G-HTQ0XYT04G"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { db, auth, provider }
