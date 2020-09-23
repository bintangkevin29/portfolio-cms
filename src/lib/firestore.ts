import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAD7X6ZA8XYrjleTp6ufAVNiHjLKZ48JF8",
  authDomain: "portfolio-69ab5.firebaseapp.com",
  databaseURL: "https://portfolio-69ab5.firebaseio.com",
  projectId: "portfolio-69ab5",
  storageBucket: "portfolio-69ab5.appspot.com",
  messagingSenderId: "675301215127",
  appId: "1:675301215127:web:243cb58f893e92ec1e52d2",
  measurementId: "G-W675LK1WK2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firebaseAuth = firebase.auth();

export const firestoreDB = firebase.firestore();

export const firebaseStorage = firebase.storage();
