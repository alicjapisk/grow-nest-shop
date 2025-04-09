// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function createProduct(productData) {
  await addDoc(collection(db, "products"), productData);
}

export function getProducts(callback) {
  onSnapshot(collection(db, "products"), (snapshot) => {
    const data = {};
    snapshot.forEach((doc) => {
      data[doc.id] = doc.data();
    });
    callback(data);
  });
}
