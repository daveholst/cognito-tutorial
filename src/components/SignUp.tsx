import React, { useState } from 'react';

import UserPool from '../UserPool';

export const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        UserPool.signUp(email, password, [], [], (err, data) => {
            if (err) {
                setErrorMsg(err.message);
                console.error(err);
            }
            console.log(data);
        });
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
                <button type="submit">Signup</button>
                {errorMsg && <p>{errorMsg}</p>}
            </form>
        </div>
    );
};
