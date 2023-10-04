
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTWLK3dvF-yfBF6k0lGDv99XCz2XLqVAs",
  authDomain: "dragon-news-project-d7634.firebaseapp.com",
  projectId: "dragon-news-project-d7634",
  storageBucket: "dragon-news-project-d7634.appspot.com",
  messagingSenderId: "73952020229",
  appId: "1:73952020229:web:4e834101eeec154b21196c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;