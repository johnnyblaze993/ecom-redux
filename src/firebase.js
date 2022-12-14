import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDiP1hYsYB3Xt0fWw_N4GW50kRDQYpJL-o',
  authDomain: 'subscription-project-85424.firebaseapp.com',
  projectId: 'subscription-project-85424',
  storageBucket: 'subscription-project-85424.appspot.com',
  messagingSenderId: '854045030034',
  appId: '1:854045030034:web:45b6a84fe1afd7ac52984b',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
