import firebase from "firebase/app";
//db
import "firebase/firestore";
//auth
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABe9zIjzERQTfasNUmMcmusr8XI2fmhSE",
  authDomain: "e-commerce-323c4.firebaseapp.com",
  projectId: "e-commerce-323c4",
  storageBucket: "e-commerce-323c4.appspot.com",
  messagingSenderId: "372060169945",
  appId: "1:372060169945:web:4314cb601edfcb17d980c8",
  measurementId: "G-EXMTMJL8N5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//tirgger google pop up when provider is used
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
