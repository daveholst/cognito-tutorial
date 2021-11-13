// import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import React, { useContext, useState } from 'react';

// import UserPool from '../UserPool';
import { AccountContext } from './Account';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMsg, setErrorMsg] = useState('');

    const { authenticate } = useContext(AccountContext);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await authenticate(email, password);
            console.log('Logged In: ', data);
        } catch (error) {
            console.error('Failed to Login: ', error);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">Login</button>
                {/* {errorMsg && <p>{errorMsg}</p>} */}
            </form>
        </div>
    );
};
