// lib/firebase/config.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// (Opcional) Analytics solo se usa en cliente, puedes comentarlo si no lo necesitas
// import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase (la que me diste)
const firebaseConfig = {
  apiKey: "AIzaSyD13N4-9MjTrmlPwGP7mves0Exje4v2ACw",
  authDomain: "kahoot-8529e.firebaseapp.com",
  databaseURL: "https://kahoot-8529e-default-rtdb.firebaseio.com",
  projectId: "kahoot-8529e",
  storageBucket: "kahoot-8529e.firebasestorage.app",
  messagingSenderId: "313414356056",
  appId: "1:313414356056:web:4aab4587f7df9393008e2d",
  measurementId: "G-8T4CPC1BQ3"
};

// Inicializa Firebase solo una vez (evita múltiples instancias en Next.js)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Servicios que usaremos en Padelclass
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// (Opcional) Analytics solo se ejecuta en el navegador
// if (typeof window !== "undefined") {
//   const analytics = getAnalytics(app);
// }

export { auth, db, storage };
