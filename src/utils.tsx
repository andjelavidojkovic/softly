import { AxiosError } from 'axios';

function getStringError(error: AxiosError<{ message?: string }>) {
  const {
    data: { message },
  } = error.response;

  return message;
}

function ValidateEmail(email: string) {
  // eslint-disable-next-line no-useless-escape
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    return 'you have entered an invalid email address';
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getStringError,
  ValidateEmail,
};
