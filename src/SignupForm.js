import React, { useState } from 'react';

const SignupForm = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = e => {
        e.preventDefault();
        onSignup(username, password);
    };

    return (
        <div id="signup-form" className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignup} className='form'>
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
                <button type="submit" className='form-button'>Sign Up</button>
            </form>
            <p className='form-footer'>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default SignupForm;