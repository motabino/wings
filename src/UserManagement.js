import React, { useState, useEffect } from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    const handleUsernameChange = (e) => {
        setNewUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleAdd = () => {
        if (newUsername.trim() !== '' && newPassword.trim() !== '') {
            const newUser = { username: newUsername, password: newPassword };
            const updatedUsers = [...users, newUser];
            setUsers(updatedUsers);
            setNewUsername('');
            setNewPassword('');
            localStorage.setItem('users', JSON.stringify(updatedUsers));
        }
    };

    const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    const handleEdit = (index) => {
        const newUsername = prompt('Enter new username:', users[index].username);
        if (newUsername) {
            const updatedUsers = users.map((user, i) => (i === index ? { ...user, username: newUsername } : user));
            setUsers(updatedUsers);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
        }
    };

    return (
        <section id="user-management-section">
            <h2 id="user-management-title">User Management</h2>
            <div className="user-management-container">
                <input
                    type="text"
                    placeholder="Enter new username"
                    value={newUsername}
                    onChange={handleUsernameChange}
                    className="user-management-input"
                />
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={handlePasswordChange}
                    className="user-management-input"
                />
                <button onClick={handleAdd} className="user-management-button add-button">
                    Add User
                </button>
            </div>
            <table id="user-management-table">
                <thead>
                    <tr>
                        <th className="user-management-header">Username</th>
                        <th className="user-management-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="user-management-row">
                            <td className="user-management-cell">{user.username}</td>
                            <td className="user-management-cell">
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="user-management-button edit-button"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="user-management-button delete-button"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default UserManagement;