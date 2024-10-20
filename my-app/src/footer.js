import React, { useState, useEffect } from 'react';
import './App.css';

function Footer() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            });
            setCurrentTime(formattedTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer className="footer-container">
            <p>Current time in Tallinn: {currentTime}</p>
        </footer>
    );
}

export default Footer;
