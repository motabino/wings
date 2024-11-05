import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <div id="login-form" className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit} className='form'>
                <input 
                    type="text" 
                    className='form-input' 
                    placeholder="Username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    className='form-input' 
                    placeholder="Password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit" className='form-button'>Login</button>
            </form>
            <p className='form-footer'>New here? <a href="/signup">Sign up</a></p>
        </div>
    );
};

export default LoginForm;