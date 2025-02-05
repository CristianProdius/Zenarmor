"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useAuthStore from "../../stores/authStore";

const ProfilePage = () => {
    const { email, setIsAuthenticated, deleteUser, registeredUsers } = useAuthStore();
    const router = useRouter();
    const [hydrated, setHydrated] = useState(false); // Ensure client-side render

    // Ensure Zustand state is loaded before rendering UI
    useEffect(() => {
        setHydrated(true);
    }, []);

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

    if (!hydrated) return null;

    return (
        <main className="py-20">
            <section className="container">
                <div className="max-w-2xl p-6 rounded-xl flex flex-col items-center justify-center bg-gray-900 text-white mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome, {email}!</h1>
                    <p className="text-base mdtext-lg mb-6">This is your protected profile page.</p>
                    <div className="flex justify-start items-center gap-6">
                        <button
                            onClick={handleLogout}
                            className="bg-lime-600 px-4 py-2 rounded-lg text-white hover:bg-lime-700"
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
                </div>
            </section>
        </main>
    );
};

export default ProfilePage;
