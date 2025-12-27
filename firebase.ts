
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Fungsi helper untuk akses env yang aman di browser
const getEnv = (key: string): string | undefined => {
  try {
    // @ts-ignore
    return typeof process !== 'undefined' ? process.env[key] : undefined;
  } catch (e) {
    return undefined;
  }
};

const firebaseConfig = {
  apiKey: getEnv('FIREBASE_API_KEY'),
  authDomain: getEnv('FIREBASE_AUTH_DOMAIN'),
  projectId: getEnv('FIREBASE_PROJECT_ID'),
  storageBucket: getEnv('FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnv('FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnv('FIREBASE_APP_ID')
};

// Validasi minimal konfigurasi sebelum inisialisasi
const isFirebaseReady = !!firebaseConfig.apiKey && !!firebaseConfig.projectId;

let dbInstance = null;

if (isFirebaseReady) {
  try {
    const app = initializeApp(firebaseConfig);
    dbInstance = getFirestore(app);
    console.log("Firebase initialized successfully.");
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.warn("Firebase configuration is missing. Cloud Sync is disabled.");
}

export const db = dbInstance;
export const isCloudConnected = !!dbInstance;
