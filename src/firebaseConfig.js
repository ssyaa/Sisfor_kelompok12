// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAomCi2BythzXkuTebcbjzyev3YNoN8VXM",
    authDomain: "wisata-sulsel-89cc6.firebaseapp.com",
    projectId: "wisata-sulsel-89cc6",
    storageBucket: "wisata-sulsel-89cc6.firebasestorage.app",
    messagingSenderId: "84057409726",
    appId: "1:84057409726:web:474ccdc466ca10d118f6ef",
    measurementId: "G-075FNQTWEG"
};

export const app = initializeApp(firebaseConfig); // Ekspor app sebagai named export
export const analytics = getAnalytics(app);
