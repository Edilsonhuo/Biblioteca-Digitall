import { async } from '@firebase/util';
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from './database/firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {
    googleLogar: async() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().singInWithPopup(provider);
        return result;
    }
}











// const BASE_API = 'https://api.b7web.com.br/devbarber/api';

// export default {
//     checkToken: async (token) => {
//         const req = await fetch(`${BASE_API}/auth/refresh`, {
//             method: 'POST', 
//             headers: {
//                 Accept: 'application/json'
//             },
//             body: JSON.stringify({token})
        
//         });
//         const json = await req.json();
//         return json;
//     },

//     signIn: async(email, password) => {
//           const req = await fetch(`${BASE_API}/auth/login`, {
//             method: 'POST',
//             headers: {
//               Accept: 'application/json',
//               'content-Type': 'application/json'
//             },
//             body: JSON.stringify({email, password}),
//         });
//         const json = await req.json();
//         return json;
//     },

//     signUp: async(name, email, password) => {
//         const req = await fetch(`${BASE_API}/user`, {
//             method: 'POST',
//             headers: {
//                Accept: 'application/json',
//                'content-Type': 'application/json',
//             },
//             body: JSON.stringify({name, email, password}),
//         });
//         const json = await req.json();
//         return json;
//     }
// };





  // @Override
  // protected ReactActivityDelegate createReactActivityDelegate() {
  //   return new ReactActivityDelegate(this, getMainComponentName()){
  //      @Override
  //      protected ReactRootView createRootView() {
  //       return new RNGestureHandlerEnabledRootView(MainActivity.this);
  // }
  //   };
  // }

  // import com.facebook.react.ReactActivityDelegate;
// import com.facebook.react.ReactRootView;
// import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
