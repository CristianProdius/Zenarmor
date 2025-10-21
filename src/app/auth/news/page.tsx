"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useAuthStore from "../../stores/authStore";
import Link from "next/link";

const NewsPage = () => {
    const { email, registeredUsers } = useAuthStore();
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

    if (!hydrated) return null;

    return (
        <main className="py-20 bg-gradient-to-b from-white to-neutral-50">
            <section className="container">
                <div className="max-w-3xl p-8 md:p-12 rounded-2xl flex flex-col items-center justify-center bg-brand-navy text-white mx-auto shadow-xl shadow-brand-mustard/20">
                    <div className="w-16 h-16 rounded-full bg-brand-mustard/10 flex items-center justify-center mb-6">
                        <svg
                            className="w-8 h-8 text-brand-mustard"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-medium mb-4 text-center">
                        Security <span className="text-brand-mustard">Insights</span>
                    </h1>

                    <p className="text-lg text-brand-neutral text-center mb-8">
                        Logged in as: <span className="font-medium text-white">{email}</span>
                    </p>

                    {isSubscribed ? (
                        <div className="text-center space-y-4 bg-brand-mustard/10 p-6 rounded-xl border border-brand-mustard/20">
                            <div className="text-5xl mb-2">🎉</div>
                            <p className="text-xl font-medium mb-2">
                                Welcome to the Zenarmor Community!
                            </p>
                            <p className="text-brand-neutral leading-relaxed">
                                You&apos;re now subscribed to receive monthly updates on the latest cybersecurity threats,
                                product updates, deployment strategies, and industry best practices. Stay ahead of
                                emerging threats with expert insights delivered directly to your inbox.
                            </p>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
                            <p className="text-lg text-brand-neutral leading-relaxed">
                                You&apos;re not currently subscribed to our Security Insights newsletter.
                            </p>
                            <p className="text-brand-neutral">
                                Join 13.5K+ security professionals receiving monthly updates on threat intelligence,
                                deployment tips, and cybersecurity trends.
                            </p>
                            <Link
                                href={'/'}
                                className="inline-block mt-4 px-6 py-3 bg-brand-mustard text-brand-navy font-medium rounded-lg hover:bg-brand-mustard/90 hover:scale-105 transition-all"
                            >
                                Subscribe Now
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default NewsPage;
