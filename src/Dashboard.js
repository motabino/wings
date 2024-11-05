import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Dashboard = ({ onLogout }) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    const goToUserManagement = () => {
        navigate('/user-management');
    };

    return (
        <div className="dashboard container">
            <h2 id='targetedh2'>Welcome to Wigns Caffe Dashboard</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td style={{ backgroundColor: product.quantity <= 5 ? 'red' : 'inherit' }}>
                                    {product.quantity} {product.quantity <= 5 ? '(Low Stock)' : ''}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          
        </div>
    );
};

export default Dashboard;
