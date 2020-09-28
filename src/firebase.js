// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyA_-0WgDrtZuF4ZuYh-cRhUQt07lqRbcjk",
//     authDomain: "todo-app-cp-bf934.firebaseapp.com",
//     databaseURL: "https://todo-app-cp-bf934.firebaseio.com",
//     projectId: "todo-app-cp-bf934",
//     storageBucket: "todo-app-cp-bf934.appspot.com",
//     messagingSenderId: "1016414555281",
//     appId: "1:1016414555281:web:f2cd7b07c844bc01770330",
//     measurementId: "G-0MH4ZBFB9N"
//   };

  import  firebase from 'firebase';
  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyA_-0WgDrtZuF4ZuYh-cRhUQt07lqRbcjk",
        authDomain: "todo-app-cp-bf934.firebaseapp.com",
        databaseURL: "https://todo-app-cp-bf934.firebaseio.com",
        projectId: "todo-app-cp-bf934",
        storageBucket: "todo-app-cp-bf934.appspot.com",
        messagingSenderId: "1016414555281",
        appId: "1:1016414555281:web:f2cd7b07c844bc01770330",
        measurementId: "G-0MH4ZBFB9N"

  });

  const db=firebase.firestore();
  export default db;