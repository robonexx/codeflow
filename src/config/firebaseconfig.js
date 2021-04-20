
import "firebase/firestore";
import firebase from 'firebase'
import {FIREBASE_KEY} from '../constants'


const firebaseConfig = {
    
    apiKey: FIREBASE_KEY,
    authDomain: "workflow-3eb06.firebaseapp.com",
    projectId: "workflow-3eb06",

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;

 /*  from our group project tried it out on my own firebase
const db = firebase.firestore();

const users = new Map()

export const getUsers = () => {
    db.collection("projects").doc("team1").collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            users.set(doc.data().username, doc.id)
            console.log(doc.data());
        });
    });
}

export const createUser = (username) => {
    db.collection("projects").doc("team1").collection("users").doc().set({
        username: username
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .then(() => {
            getUsers()
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
}

export const removeUser = (username) => {
    db.collection("projects").doc("team1").collection("users").doc(users.get(username)).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

    getUsers()
}
 */