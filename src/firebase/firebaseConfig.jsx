// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBix9aQrBRmxuFmv-D3vQE4BzkF-1XcZqA',
    authDomain: 'blog-nits.firebaseapp.com',
    projectId: 'blog-nits',
    storageBucket: 'blog-nits.appspot.com',
    messagingSenderId: '85606260535',
    appId: '1:85606260535:web:f2e448344c9c1c8bd8c4b2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();

export { FireDb, auth ,storage};
