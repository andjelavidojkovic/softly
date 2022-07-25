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
type errMsg = {
  email?: string;
  password?: string;
  matchPwd?: string;
};

const validation = (props: any) => {
  let errors: errMsg = {};

  if (!props.email) {
    errors.email = 'Email is required.';
  } else if (
    // eslint-disable-next-line no-useless-escape
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(props.email)
  ) {
    errors.email = 'Invalid form of the email.';
  }
  if (!props.pwd) {
    errors.password = 'Password is required.';
  } else if (!/^(?=.*[a-z]).{6,24}$/.test(props.pwd)) {
    errors.password = 'Password must contain minimum 6 characters';
  }
  if (!props.matchPwd) {
    errors.matchPwd = 'Password is required.';
  } else if (!props.pwd === props.matchPwd) {
    errors.matchPwd = 'Password must match the one entered above.';
  }
  return errors;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getStringError,
  validateEmail,
  validatePwd,
  validation,
};
