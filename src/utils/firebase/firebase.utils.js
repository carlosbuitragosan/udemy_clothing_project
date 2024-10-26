import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCIa0L0OylauIQw0sxy8LuZHN07f4xO6Y8',
  authDomain: 'crwn-clothing-db-a2cc1.firebaseapp.com',
  projectId: 'crwn-clothing-db-a2cc1',
  storageBucket: 'crwn-clothing-db-a2cc1.appspot.com',
  messagingSenderId: '542924469282',
  appId: '1:542924469282:web:7a9a5c853567a8c7c2467b',
  measurementId: 'G-6LYR3BZCHP',
};
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};
