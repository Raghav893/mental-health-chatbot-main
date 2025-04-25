import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDeQw5rRqjDIpkibVkxnfCTU3vuYmezOCo",
  authDomain: "auth-dev-a32a6.firebaseapp.com",
  projectId: "auth-dev-a32a6",
  storageBucket: "auth-dev-a32a6.firebasestorage.app",
  messagingSenderId: "853450312880",
  appId: "1:853450312880:web:56dc44ed61b97e0db03f75"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app; 