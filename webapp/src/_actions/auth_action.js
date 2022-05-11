import { AUTH, LOGIN_USER, SIGNUP_USER } from '_types/authType';

export function actionLogin(responseData) {
<<<<<<< HEAD
=======
  const { data } = responseData;
  const { data: userInfo } = data;
  // setCookie(USER_INFO, userInfo, { maxAge: 60 * 60, path: '/' });
>>>>>>> feature/user
  return {
    type: LOGIN_USER,
    payload: responseData,
  };
}

export function actionSignUp(responseData) {
  return {
    type: SIGNUP_USER,
    payload: responseData,
  };
}

export function checkUserInfo(userInfo) {
  return {
    type: AUTH,
    payload: userInfo,
  };
}
