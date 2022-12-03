import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCZn_jWRGRx41ownxsqhZy_PnyocJ8OBiw",
    authDomain: "realtime-chat-67a80.firebaseapp.com",
    databaseURL: "https://realtime-chat-67a80-default-rtdb.firebaseio.com",
    projectId: "realtime-chat-67a80",
    storageBucket: "realtime-chat-67a80.appspot.com",
    messagingSenderId: "596719605994",
    appId: "1:596719605994:web:12ff8821d2398c82821f93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const realtimeDB = getDatabase(app);
export const authDB = getAuth(app);
export const storageDB = getStorage(app);
export default app;