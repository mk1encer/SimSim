import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCj8JkGlqZtCJarIxWN9d7OK4cJ8AoCsoM",
  authDomain: "simsim-1618a.firebaseapp.com",
  databaseURL: "https://simsim-1618a-default-rtdb.firebaseio.com",
  projectId: "simsim-1618a",
  storageBucket: "simsim-1618a.appspot.com",
  messagingSenderId: "32178958601",
  appId: "1:32178958601:web:9729dd1ae2ced6c386a3d8",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = firebaseApp.auth;
