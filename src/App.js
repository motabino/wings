import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard';
import ProductManagement from './ProductManagement';
import UserManagement from './UserManagement';
import NavBar from './NavBar';
import './App.css';

const App = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const handleLogin = (username, password) => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = '/dashboard';
        } else {
            alert('Invalid credentials');
        }
    };

    const handleSignup = (username, password) => {
        if (users.find(u => u.username === username)) {
            alert('Username already exists');
        } else {
            const updatedUsers = [...users, { username, password }];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            //alert('Signup successful! You can now log in.');
            window.location.href = '/login';
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        window.location.href = '/login';
    };

    return (
        <Router>
            <div className="container">
                {currentUser && <NavBar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />}
                <Routes>
                    <Route path="/" element={currentUser ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
                    <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                    <Route path="/signup" element={<SignupForm onSignup={handleSignup} />} />
                    <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
                    <Route path="/product-management" element={<ProductManagement />} />
                    <Route path="/user-management" element={<UserManagement />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
