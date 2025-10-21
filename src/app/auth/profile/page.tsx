"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useAuthStore from "../../stores/authStore";

const ProfilePage = () => {
    const {
        email,
        setIsAuthenticated,
        deleteUser,
        registeredUsers,
        toggleNewsletterSubscription,
    } = useAuthStore();
    const router = useRouter();
    const [hydrated, setHydrated] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        setHydrated(true);

        const isAuthenticated = Cookies.get("isAuthenticated") === "true";
        if (!isAuthenticated) {
            router.push("/login");
        }

        const user = registeredUsers.find((user) => user.email === email);
        setIsSubscribed(user?.newsletterSubscribed || false);
    }, [router, registeredUsers, email]);

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

    const handleToggleSubscription = () => {
        toggleNewsletterSubscription(email);
        setIsSubscribed((prev) => !prev);
    };

    if (!hydrated) return null;

    return (
        <main className="py-16 lg:py-24 bg-white">
            <section className="container">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section with Brand Colors */}
                    <div className="bg-gradient-to-r from-brand-navy to-brand-navy/95 rounded-2xl p-8 md:p-12 mb-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-mustard/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <h1 className="text-3xl md:text-4xl font-medium text-white mb-3">
                                Security Dashboard
                            </h1>
                            <p className="text-gray-300 mb-6">
                                Manage your Zenarmor account and security preferences
                            </p>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 inline-block">
                                <div className="text-sm text-gray-300 mb-1">Account Email</div>
                                <div className="text-xl text-white font-medium">{email}</div>
                            </div>
                        </div>
                    </div>

                    {/* Account Status Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-mustard/10 rounded-lg">
                                    <svg className="w-6 h-6 text-brand-mustard" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-brand-navy mb-2">Account Active</h3>
                                    <p className="text-sm text-gray-600">
                                        Enterprise-grade security protection enabled
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-navy/10 rounded-lg">
                                    <svg className="w-6 h-6 text-brand-navy" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-brand-navy mb-2">Compliance Ready</h3>
                                    <p className="text-sm text-gray-600">
                                        SOC 2 & GDPR compliant infrastructure
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Subscription Section */}
                    <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-brand-mustard/10 rounded-lg">
                                <svg className="w-6 h-6 text-brand-mustard" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-medium text-brand-navy mb-2">
                                    Security Updates & Newsletter
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    {isSubscribed
                                        ? "You're receiving monthly security updates, threat intelligence reports, and product announcements."
                                        : "Stay informed about the latest cybersecurity threats, product updates, and best practices."}
                                </p>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-3 h-3 rounded-full ${isSubscribed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        {isSubscribed ? 'Subscribed' : 'Not Subscribed'}
                                    </span>
                                </div>
                                <button
                                    onClick={handleToggleSubscription}
                                    className={`relative z-0 inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 ${
                                        isSubscribed
                                            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            : 'bg-gradient-to-br from-brand-mustard to-orange-600 text-white before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-brand-navy before:transition-transform before:duration-500 before:content-[""] hover:scale-105 hover:before:translate-y-[0%]'
                                    }`}
                                >
                                    {isSubscribed ? 'Unsubscribe from Newsletter' : 'Subscribe to Newsletter'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Account Actions */}
                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                        <h2 className="text-2xl font-medium text-brand-navy mb-6">Account Actions</h2>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleLogout}
                                className="relative z-0 inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg bg-gradient-to-br from-brand-mustard to-orange-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-brand-navy before:transition-transform before:duration-500 before:content-[''] hover:scale-105 hover:before:translate-y-[0%]"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                </svg>
                                Logout
                            </button>

                            <button
                                onClick={handleDeleteUser}
                                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-red-500 px-6 py-3 text-sm font-medium text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Delete Account
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            Need help? Contact our support team at <a href="mailto:hi@zenarmor.com" className="text-brand-mustard hover:underline">hi@zenarmor.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProfilePage;
