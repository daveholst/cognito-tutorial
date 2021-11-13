import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import React, { createContext } from 'react';

import Pool from '../UserPool';

export const AccountContext: any = createContext(undefined);

interface AccountProps {
    children: any;
}

export function Account(props: AccountProps) {
    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err: Error, session: any) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(session);
                        console.log('Session Obj :: ', session);
                    }
                });
            }
            reject();
        });
    };

    const authenticate = async (Username: string, Password: string) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });

            const authDetails = new AuthenticationDetails({ Username, Password });

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log('onSuccess: ', data);
                    resolve(data);
                },
                onFailure: (data) => {
                    console.log('onFailure: ', data);
                    reject(data);
                },
                newPasswordRequired: (data) => {
                    console.log('newPasswordRequired: ', data);
                    resolve(data);
                },
            });
        });
    };
    return <AccountContext.Provider value={{ authenticate, getSession }}>{props.children}</AccountContext.Provider>;
}
