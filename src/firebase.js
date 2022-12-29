import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.local.REACT_APP_API_KEY,
  authDomain: process.env.local.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.local.REACT_APP_PROJECT_ID,
  storageBucket: process.env.local.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.local.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.local.REACT_APP_APP_ID,
  measurementId: process.env.local.REACT_APP_MEASURMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

REACT_APP_API_KEY;
REACT_APP_AUTH_DOMAIN;
REACT_APP_PROJECT_ID;
REACT_APP_STORAGE_BUCKET;
REACT_APP_MESSAGING_SENDER_ID;
REACT_APP_APP_ID;
REACT_APP_MEASURMENT_ID;
