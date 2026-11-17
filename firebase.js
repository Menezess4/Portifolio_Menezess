import {initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDvNsWsyEoaJOXpy5WhRzF9oz2Y2l7NmE8",
  authDomain: "portifolio-95eec.firebaseapp.com",
  projectId: "portifolio-95eec",
  storageBucket: "portifolio-95eec.firebasestorage.app",
  messagingSenderId: "944847070662",
  appId: "1:944847070662:web:37e7790c39db059ad57ec7",
  measurementId: "G-QD6M5NZYLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);