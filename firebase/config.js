import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJJ1FR7cUe5HIyYZ8C9pgQWA9iycAPanM",
  authDomain: "miniblog-e22fa.firebaseapp.com",
  projectId: "miniblog-e22fa",
  storageBucket: "miniblog-e22fa.appspot.com",
  messagingSenderId: "516680942394",
  appId: "1:516680942394:web:79567c09d349e2dc5b0603",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
