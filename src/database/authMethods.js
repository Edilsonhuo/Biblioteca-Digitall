import {auth} from './firebaseConfig';
// import {FacebookAuthProvider, GoogleAuthProvider} from 'firebase/auth'

export const facebookProvider = auth.FacebookAuthProvider();
export const googleProvider = auth.GoogleAuthProvider();
