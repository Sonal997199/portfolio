
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAH1CYnamI4b3dSffrsJnj5W9-GpXk8PiE",
  authDomain: "sonal-portfolio.firebaseapp.com",
  projectId: "sonal-portfolio",
  storageBucket: "sonal-portfolio.appspot.com",
  messagingSenderId: "555461958595",
  appId: "1:555461958595:web:e5cd3e9fc7cf6b9f1ebb76"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();