import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const username = localStorage.getItem('username');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const navigate = useNavigate();

    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        setMessages(savedMessages);
    }, []);

    const handleSendMessage = () => {
        if (message.trim() === '') {
            return;
        }

        const newMessage = { user: username, text: message };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage('');

        localStorage.setItem('chatMessages', JSON.stringify([...messages, newMessage]));
    };

    const handleDeleteMessage = (index) => {
        const updatedMessages = [...messages];
        updatedMessages.splice(index, 1);
        setMessages(updatedMessages);
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        navigate('/login');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chat-container">
            <h2>Chat</h2>
            {!isLoggedIn ? (
                <div>You must be logged in to use chat.</div>
            ) : (
                <div>
                    <p>You logged in as a {username}</p>
                    <button onClick={handleLogout}>Log out</button>
                    <div id="chat-container" className="message-container">
                        {messages.map((msg, index) => (
                            <div key={index} className={username === msg.user ? '' : 'other-user'}>
                                <strong>{msg.user}: </strong>
                                {msg.text}
                                {username === msg.user && (
                                    <button onClick={() => handleDeleteMessage(index)}>Delete</button>
                                )}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        placeholder="Type your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="input-style"
                    />
                    <button onClick={handleSendMessage} className="button-style">Send</button>
                </div>
            )}
        </div>
    );
}

export default Chat;
