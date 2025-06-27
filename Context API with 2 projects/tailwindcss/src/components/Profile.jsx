import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-lg text-gray-700 font-medium bg-white px-6 py-4 rounded shadow">
                Please login
            </div>
        </div>
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
            <div className="bg-white p-10 rounded-xl shadow-md text-center">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome</h1>
                <p className="text-xl text-gray-700">Hello, <span className="font-semibold">{user.username}</span> 👋</p>
            </div>
        </div>
    );
}

export default Profile;
