import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((u) => u.username === username && u.password === password);

        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            navigate('/chat');
        } else {
            alert('Invalid username or password.');
        }
    };


    return (
        <div className="login-container">
            <h2>Log in</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-style"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="button-style">Log in</button>
        </div>
    );
}

export default Login;
