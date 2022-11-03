import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDLagStCMRBcGESrrjcoq4VfBRzQF-qdtU",
  authDomain: "meraki-d029d.firebaseapp.com",
  projectId: "meraki-d029d",
  storageBucket: "meraki-d029d.appspot.com",
  messagingSenderId: "35507038318",
  appId: "1:35507038318:web:41199db7b4cd9bcfac1e7f",
  measurementId: "G-913S8YJFQ1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {auth}
