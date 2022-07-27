

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

const errorMessageFromServer = (message: string) => {
    return
}
const emptyInput =
    () => (value: string) => {
        return (value ? undefined : "This field is required")
    }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    validateEmail,
    validatePassword,
    emptyInput,
    errorMessageFromServer
}
