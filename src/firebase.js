import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBympFkSZoURnaUPFehHMFBIEppN8Ba3E4",
  authDomain: "zeptox-d3757.firebaseapp.com",
  projectId: "zeptox-d3757",
  storageBucket: "zeptox-d3757.appspot.com",
  messagingSenderId: "1015447088653",
  appId: "1:1015447088653:web:e2dc9d9389090e4666ef44",
  measurementId: "G-51P69XGHJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
