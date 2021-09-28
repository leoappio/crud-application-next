import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain:process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId:process.env.NEXT_PUBLIC_PROJECT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Enable Firestore Cache
firebase.firestore()
    .enablePersistence()
    .catch((err) => {
        console.error(err);
    });

export default firebase;
