import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCFGH_UEtpeTBa1Pq3JDD9dr9zoxVcKZNA",
        authDomain: "insta-clone-471b5.firebaseapp.com",
        projectId: "insta-clone-471b5",
        storageBucket: "insta-clone-471b5.appspot.com",
        messagingSenderId: "930079523804",
        appId: "1:930079523804:web:8edd800a7dd0d055940519",
        measurementId: "G-8M25SKRX0Q"
      
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

  