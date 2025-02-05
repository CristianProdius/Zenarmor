"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useAuthStore from "../../stores/authStore";

const ProfilePage = () => {
    const { email, setIsAuthenticated, deleteUser, registeredUsers } = useAuthStore();
    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove("isAuthenticated");
        setIsAuthenticated(false);
        router.push("/login");
    };

    const handleDeleteUser = () => {
        const userExists = registeredUsers.some((user) => user.email === email);

        if (userExists) {
            deleteUser(email);
            alert("User deleted!");
            router.push("/login");
        } else {
            alert("User not found!");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome, {email}!</h1>
            <p className="text-lg mb-6">This is your protected profile page.</p>

            <button
                onClick={handleLogout}
                className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 mb-4"
            >
                Logout
            </button>

            <button
                onClick={handleDeleteUser}
                className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
            >
                Delete User
            </button>
        </div>
    );
};

export default ProfilePage;
