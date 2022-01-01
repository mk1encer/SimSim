import * as firebase from "firebase";
import firestone from "firebase/firesore";

const settings = { timestampsInSnapshots: true };

const config = {
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  apiKey: "YOUR_API_KEY",
  databaseURL: "YOUR_DATABASE_URL",
};

firebase.initializeApp(config);

firebase.firestone().settings(settings);

export default firebase;
