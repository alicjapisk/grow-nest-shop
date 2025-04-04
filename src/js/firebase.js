// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// import {
//   push,
//   ref,
//   getDatabase,
//   onValue,
// } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
// import {
//   getStorage,
//   ref as storageRef,
//   uploadBytes,
//   getDownloadURL,
// } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLgMlecmSzmpOkUh2OelEkITyWo2iHlaI",
  authDomain: "grow-nest-shop.firebaseapp.com",
  databaseURL: "https://grow-nest-shop-default-rtdb.firebaseio.com",
  projectId: "grow-nest-shop",
  storageBucket: "grow-nest-shop.firebasestorage.app",
  messagingSenderId: "277394138239",
  appId: "1:277394138239:web:4435c394d7db7509858b4a",
  measurementId: "G-KGY1JP1SGN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const storage = getStorage(app);

export function createProduct(productData) {
  push(ref(db, "products"), productData);
}

export function getProducts(callback) {
  onValue(ref(db, "products"), (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}

export {
  db,
  storage,
  ref, // ← z Realtime Database
  push, // ← z Realtime Database
  storageRef, // ← alias do storage.ref
  uploadBytes,
  getDownloadURL, // ← tu był błąd
};
