"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "../stores/authStore";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../assets/images/logo.svg";

const RegisterPage = () => {
    const { registerUser, setEmail, setPassword } = useAuthStore();
    const router = useRouter();
    const [email, setLocalEmail] = useState("");
    const [password, setLocalPassword] = useState("");

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        if (email && password) {
            registerUser(email, password);
            setEmail(""); 
            setPassword(""); 
            alert("Registration successful! Please log in.");
        router.push("/login");
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <main className="py-20 bg-white min-h-screen">
            <section className="container flex items-center justify-center">
                <div className="w-full max-w-lg bg-white rounded-2xl p-8 shadow-xl border border-neutral-200">
                <div className="flex justify-center mb-6">
                    <Link href={"/"}>
                        <Image src={logoImage} alt="Zenarmor Logo" className="h-10 w-auto" />
                    </Link>
                </div>
                    <h1 className="text-center text-3xl font-semibold mb-2 text-[#020045]">Create Account</h1>
                    <p className="text-center text-sm text-[#9DA4AE] mb-6">Join Zenarmor and secure your network</p>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#020045]">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setLocalEmail(e.target.value)}
                                className="w-full bg-white border-2 border-neutral-200 rounded-lg p-3 text-sm placeholder-[#9DA4AE] text-[#020045] focus:outline-none focus:ring-2 focus:ring-[#F98800] focus:border-transparent transition"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1 text-[#020045]">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setLocalPassword(e.target.value)}
                                className="w-full bg-white border-2 border-neutral-200 rounded-lg p-3 text-sm placeholder-[#9DA4AE] text-[#020045] focus:outline-none focus:ring-2 focus:ring-[#F98800] focus:border-transparent transition"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#F98800] text-white rounded-lg py-3 font-semibold hover:bg-[#E07A00] transition-colors"
                        >
                            Create Account
                        </button>
                    </form>
                    <p className="text-center text-sm text-[#9DA4AE] mt-6">
                        Already have an account?{" "}
                        <Link href="/login">
                            <span className="text-[#F98800] hover:underline font-medium">Login</span>
                        </Link>
                    </p>
                </div>

            </section>
        </main>
    );
};

export default RegisterPage;
