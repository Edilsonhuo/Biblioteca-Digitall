// //npm install -g firebase-tools
// import * as firebase from 'firebase';
// import 'firebase/firestore';
// import 'firebase/auth';
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth';
 
const firebaseConfig = {
  apiKey: 'AIzaSyCjNayoAc3RtFxTyMkubWXlQ9BXtysvtCw',
  authDomain: 'biblioteca-digital-5c6b8.firebaseapp.com',
  projectId: 'biblioteca-digital-5c6b8',
  storageBucket: 'biblioteca-digital-5c6b8.appspot.com',
  messagingSenderId: '724890821392',
  appId: '1:724890821392:web:5b5eff5cab655181fa7b95',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// let app;

// if (firebase.apps.length === 0){
//     app = firebase.initializeApp(firebaseConfig);

// }else{
//     app = firebase.app()
// }

// const db  = app.firebase();
// const auth = firebase.auth();

// export {db, auth};