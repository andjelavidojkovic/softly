import React from 'react';

export const noop = () => { };

export type LoginContextProps = {
    values: Record<string, any>;
    logged: boolean;
    isLogged: (logged: boolean) => void;
}
export default React.createContext<LoginContextProps>({
    values: null,
    logged: false,
    isLogged: noop
});