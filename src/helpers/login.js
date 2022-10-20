import {GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import url from '../config/mainUrl';

export function loginWithEmail() {}

export const getInfoFromToken = token => {
  const PROFILE_REQUEST_PARAMS = {
    fields: {
      string: 'id, name,  first_name, last_name, email',
    },
  };
  const profileRequest = new GraphRequest(
    '/me',
    {token, parameters: PROFILE_REQUEST_PARAMS},
    (error, result) => {
      if (error) {
        console.log('login info has error: ' + error);
      } else {
        console.log('result:', result);
        createUser(result.name, result.email, false);
      }
    },
  );
  new GraphRequestManager().addRequest(profileRequest).start();
};

export const loginWithGoogle = () => {
  GoogleSignin.configure({
    androidClientId:
      '965191305920-fijnn21379t7g3jietsfpul13of914bp.apps.googleusercontent.com',
    iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
  });
  GoogleSignin.hasPlayServices()
    .then(hasPlayService => {
      if (hasPlayService) {
        GoogleSignin.signIn()
          .then(userInfo => {
            console.log('userdata:' + JSON.stringify(userInfo));
            createUser(userInfo.user.name, userInfo.user.email, false);
          })
          .catch(e => {
            console.log('ERROR IS: ' + JSON.stringify(e));
            // return false;
          });
      }
    })
    .catch(e => {
      console.log('ERROR IS: ' + JSON.stringify(e));
    });
};

export const createUser = async (name, email, password) => {
  await axios
    .post(`${url}/api/addUser`, {
      name: name,
      email: email,
      password: password,
      restaurant_name: 'Aalkate',
    })
    .then(res => {
      console.log(res);
      password && alert('You have Successfully Registered');
      return true;
    })
    .catch(err => {
      console.log(err);
      password && alert('Somthing went wrong.');
      return false;
    });
};
