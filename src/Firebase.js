import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

const config = {
  projectId: "simsim-1618a",
  apiKey: "AIzaSyCj8JkGlqZtCJarIxWN9d7OK4cJ8AoCsoM",
  databaseURL: "https://simsim-1618a-default-rtdb.firebaseio.com",
};

firebase.initializeApp(config);

firebase.firestone().settings(settings);

export default firebase;
