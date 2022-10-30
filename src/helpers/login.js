import {GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
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
