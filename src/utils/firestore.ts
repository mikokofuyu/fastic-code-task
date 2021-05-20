import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAWHwhdXf9a1i_-FXrIpS3QjBzvWAcWxFo",
    authDomain: "fastic-code-task.firebaseapp.com",
    projectId: "fastic-code-task",
    storageBucket: "fastic-code-task.appspot.com",
    messagingSenderId: "92969452243",
    appId: "1:92969452243:web:246dca729219fe5c290a26",
    measurementId: "G-N4LVBDF08T"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase