import auth from '../database/firebaseConfig';
//import {signInWithPopup} from 'firebase/auth'


const socialMediaAuth = (provider) => {
      auth()
      .signInWithPopup(provider)
      .then(res => {
        return res.user;
      })
      .catch((er) => {
          return er;
      });
} 

export default socialMediaAuth;