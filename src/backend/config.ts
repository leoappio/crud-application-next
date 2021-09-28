import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

export default initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain:process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId:process.env.NEXT_PUBLIC_PROJECT_ID
})
