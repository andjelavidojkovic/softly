import { AxiosError } from 'axios';

function getStringError(error: AxiosError<{ message?: string }>) {
  const {
    data: { message },
  } = error.response;

  return message;
}

function validateEmail(email: string) {
  if (email === '') {
    return 'Please enter email address';
    // eslint-disable-next-line no-useless-escape
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    // return true;
    // } else {
    return 'Invalid email address';
  }
}

function validatePwd(pwd: string) {
  if (pwd === '') {
    return 'Please enter password';
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getStringError,
  validateEmail,
  validatePwd,
};
