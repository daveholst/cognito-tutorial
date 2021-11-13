import './App.css';

import React from 'react';

// import logo from './logo.svg';
import { Account } from './components/Account';
import { Login } from './components/Login';
import { Signup } from './components/SignUp';
import Status from './components/Status';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Account>
                <header className="App-header">
                    <Status />
                    <h1>TESTTT</h1>
                    <Signup></Signup>
                    <Login></Login>
                </header>
            </Account>
        </div>
    );
}

export default App;
