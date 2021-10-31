import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseconfig';

let firebaseInit = () =>{
    initializeApp(firebaseConfig)
}

export default firebaseInit;