import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALgdbPATMQvwR5WSxiuUhBhqRFDbQ9yx4",
    authDomain: "ecom-nft.firebaseapp.com",
    projectId: "ecom-nft",
    storageBucket: "ecom-nft.appspot.com",
    messagingSenderId: "418293630532",
    appId: "1:418293630532:web:e079b8a5c405671f7b1e11",
    measurementId: "G-CXZ1K93KPX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);