import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "dotenv/config";
const FirebaseAPP = initializeApp({
  apiKey: process.env.APIKEY,
  appId: process.env.APPID,
  authDomain: process.env.AUTHDOMAIN,
  measurementId: process.env.MEASUREMENTID,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
});
export const DB = getFirestore(FirebaseAPP);
