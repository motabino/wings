import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ activeTab, setActiveTab, onLogout }) => {
    const navigate = useNavigate();

    const handleNavigation = (path, tabName) => {
        setActiveTab(tabName);
        navigate(path);
    };

    return (
        <nav className="navbar">
            <button 
                onClick={() => handleNavigation('/dashboard', 'Dashboard')}
                className={activeTab === 'Dashboard' ? 'active' : ''}
            >
                Dashboard
            </button>
            <button 
                onClick={() => handleNavigation('/product-management', 'ProductManagement')}
                className={activeTab === 'ProductManagement' ? 'active' : ''}
            >
                Product Management
            </button>
            <button 
                onClick={() => handleNavigation('/user-management', 'UserManagement')}
                className={activeTab === 'UserManagement' ? 'active' : ''}
            >
                User Management
            </button>
            <button onClick={onLogout}>Logout</button>
        </nav>
    );
};

export default NavBar;
