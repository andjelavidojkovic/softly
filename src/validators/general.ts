const validateEmail =
    (errorMessage: string) => (value: string) => {
        // eslint-disable-next-line no-useless-escape
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
            ? undefined
            : errorMessage;
    };

const validatePassword =
    (errorMessage: string) => (value: string, allValues: Record<string, any>) => {
        console.log(value);
        // eslint-disable-next-line no-useless-escape
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(value)
            ? undefined
            : errorMessage;
    };

const passwordSpecialChar = (errorMessage: string) => (value: string, allValues: Record<string, any>) => {
    console.log(value);
    // eslint-disable-next-line no-useless-escape
    return /^(?=.*[!@#\$%\^&\*])/.test(value)
        ? undefined
        : errorMessage;
};

const passwordLowerCaseChar = (errorMessage: string) => (value: string, allValues: Record<string, any>) => {
    console.log(value);
    // eslint-disable-next-line no-useless-escape
    return /^(?=.*[a-z])/.test(value)
        ? undefined
        : errorMessage;
};
const passwordUpperCaseChar = (errorMessage: string) => (value: string, allValues: Record<string, any>) => {
    console.log(value);
    // eslint-disable-next-line no-useless-escape
    return /^(?=.*[A-Z])/.test(value)
        ? undefined
        : errorMessage;
};
const passwordNumber = (errorMessage: string) => (value: string, allValues: Record<string, any>) => {
    console.log(value);
    // eslint-disable-next-line no-useless-escape
    return /^(?=.*[0-9])/.test(value)
        ? undefined
        : errorMessage;
};
const passwordLenght = (errorMessage: string) => (value: string, allValues: Record<string, any>) => {
    console.log(value);
    // eslint-disable-next-line no-useless-escape
    return /^(?=.{8,})/.test(value)
        ? undefined
        : errorMessage;
};

const validateName =
    (errorMessage: string) => (value: string, allValues: Record<string, any>) => {
        console.log(value);
        // eslint-disable-next-line no-useless-escape
        return /^[A-Z]+([a-z])/.test(value)
            ? undefined
            : errorMessage;
    };

const required =
    (errorMessage: string) => (value: string) => {
        return (value ? undefined : errorMessage)
    }


export const composeValidators = (...validators: Array<any>) => (value: string, allValues: Record<string, any>) => {
    return validators.reduce((errorMessage, validator) => {
        return errorMessage || validator(value, allValues)
    }, undefined)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    validateEmail,
    validatePassword,
    required,
    validateName,
    passwordSpecialChar,
    passwordLowerCaseChar,
    passwordUpperCaseChar,
    passwordNumber,
    passwordLenght
}
