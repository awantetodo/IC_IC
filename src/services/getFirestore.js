import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDh-Zyy4WEUGOQR9HlwzvHTKB0-ILyslH0",
    authDomain: "iruvermu.firebaseapp.com",  
    projectId: "iruvermu",  
    storageBucket: "iruvermu.appspot.com",  
    messagingSenderId: "828600447309", 
    appId: "1:828600447309:web:085c83cc092e61c0f98704" 
  };
  

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore (){
    return firebase.firestore(app)
}
