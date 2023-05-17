// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8Y-1S1yxMQngb_8c_ptrULnehy2xG1TU",
  authDomain: "assignment-eleven-7252c.firebaseapp.com",
  projectId: "assignment-eleven-7252c",
  storageBucket: "assignment-eleven-7252c.appspot.com",
  messagingSenderId: "925788095010",
  appId: "1:925788095010:web:d4906da227a7a6ad4d807b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}