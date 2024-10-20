import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Register() {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegister = () => {
        if (newUsername.trim() !== '' && newPassword.trim() !== '') {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const isUserExist = existingUsers.some((user) => user.username === newUsername);
            if (isUserExist) {
                alert('A user with this username already exists.');
            } else {
                const newUser = { username: newUsername, password: newPassword };
                existingUsers.push(newUser);
                localStorage.setItem('users', JSON.stringify(existingUsers));
                setIsRegistered(true);
            }
        } else {
            alert('Type username and password');
        }
    };

    return (
        <div className="login-container">
            <h2>Registration</h2>
            {isRegistered ? (
                <div>
                    <p>Registration was successful, now you can <Link to="/login">log in</Link>.</p>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button onClick={handleRegister}>Register</button>
                </div>
            )}
        </div>
    );
}

export default Register;
