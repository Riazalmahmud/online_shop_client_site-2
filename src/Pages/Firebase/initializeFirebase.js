import firebaseConfig from './firebaseConfig'
import { initializeApp } from "firebase/app";
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initializeFirebase;