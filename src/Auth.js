import React, { useState } from 'react';

function Auth({ setCurrentUser }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
    } else {
      setStatus('Invalid credentials');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (users.find(u => u.username === username)) {
      setStatus('Username already exists');
    } else {
      const newUser = { username, password };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setStatus('Signup successful');
      setIsSignUp(false);
    }
  };

  return (
    <div className="auth-form">
      {isSignUp ? (
        <form onSubmit={handleSignUp}>
          <h2>Sign Up</h2>
          <p>{status}</p>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="#" onClick={() => setIsSignUp(false)}>Login</a></p>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <p>{status}</p>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
          <p>New User? <a href="#" onClick={() => setIsSignUp(true)}>Sign up</a></p>
        </form>
      )}
    </div>
  );
}

export default Auth;