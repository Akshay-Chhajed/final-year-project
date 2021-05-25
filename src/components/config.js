import firebase from "firebase/app"
const firebaseConfig = {
  apiKey: "AIzaSyAoFA_alBXia6Po0bp4do3PZIOJHoFmlag",
    authDomain: "akshay-7d975.firebaseapp.com",
    databaseURL: "https://akshay-7d975-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "akshay-7d975",
    storageBucket: "akshay-7d975.appspot.com",
    messagingSenderId: "232278246341",
    appId: "1:232278246341:web:9793fa4f3d9a150fed81ac",
    measurementId: "G-RS58B30SQ7"
  };

const fire=firebase.initializeApp(firebaseConfig);
  

export default fire;