import React from 'react';
import { User } from '../../models/User';

export const noop = () => { };

export type LoginContextProps = {
    user: Record<string, any>;
    isLogged: boolean;
    setUser: (user: User) => void;
    logout: () => void;
}
export default React.createContext<LoginContextProps>({
    user: null,
    isLogged: false,
    setUser: noop,
    logout: noop
});