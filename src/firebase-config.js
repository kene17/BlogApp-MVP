import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd5G_8ctWgNypGSuz3jyyKjqy0ZTtdwUs",
  authDomain: "blogproject-b8145.firebaseapp.com",
  projectId: "blogproject-b8145",
  storageBucket: "blogproject-b8145.appspot.com",
  messagingSenderId: "710454205059",
  appId: "1:710454205059:web:5ca470aa79c1e87843d9b6",
  measurementId: "G-RHJ7QM38MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//when you login google popultes auth with the data e.g name
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); //	The authentication method used ("password", "anonymous", "facebook", "github", "google", or "twitter").


