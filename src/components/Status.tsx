import React, { useContext, useEffect, useState } from 'react';

import { AccountContext } from './Account';

export default function Status() {
    const [status, setStatus] = useState(false);

    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession().then((session: any) => {
            console.log('Session :: ', session);
            setStatus(true);
            console.log('Status now :: ', status);
        }).catch;
    }, []);

    return <div>{status ? 'You are Logged In' : 'Please Login'}</div>;
}
