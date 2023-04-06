
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBVz_MRpWfGLyk_JQyNR2PW2dajknWJUa0",
  authDomain: "stayhealthy-8230f.firebaseapp.com",
  projectId: "stayhealthy-8230f",
  storageBucket: "stayhealthy-8230f.appspot.com",
  messagingSenderId: "481620971503",
  appId: "1:481620971503:web:88200340cbac005a8a301a",
  measurementId: "G-S4G4V9S9CD"
};
const app = initializeApp(firebaseConfig);
const firestoreDatabase=getFirestore(app);
export default firestoreDatabase;