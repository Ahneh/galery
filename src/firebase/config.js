import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDxgio7m-D-SJfRmbxSSEgr60KhSInEobo",
  authDomain: "firegram-632de.firebaseapp.com",
  databaseURL: "https://firegram-632de-default-rtdb.firebaseio.com",
  projectId: "firegram-632de",
  storageBucket: "firegram-632de.appspot.com",
  messagingSenderId: "1086285206613",
  appId: "1:1086285206613:web:4f63ccbdb06d38179530dc",
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
