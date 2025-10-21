"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useAuthStore from "../stores/authStore";
import logoImage from "../../assets/images/logo.svg";

const LoginPage = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    registeredUsers,
    setIsAuthenticated,
    rememberMe,
    setRememberMe,
  } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get("rememberMe") !== "true") {
      setEmail("");
      setPassword("");
    }
  }, [setEmail, setPassword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userExists = registeredUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      setIsAuthenticated(true);
      if (rememberMe) {
        Cookies.set("email", email, { expires: 7 });
        Cookies.set("password", password, { expires: 7 });
        Cookies.set("rememberMe", "true", { expires: 7 });
      }
      router.push("/auth/profile");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <main className="py-20 bg-white min-h-screen">
      <section className="container flex flex-col items-center justify-center">
        <motion.div
          className="w-full max-w-lg bg-white rounded-2xl p-8 shadow-xl border border-neutral-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <Link href={"/"}>
              <Image src={logoImage} alt="Zenarmor Logo" className="h-10 w-auto" />
            </Link>
          </div>
          <h1 className="text-center text-3xl font-semibold mb-2 text-[#020045]">Welcome Back</h1>
          <p className="text-center text-sm text-[#9DA4AE] mb-6">Sign in to your Zenarmor account</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1 text-[#020045]" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border-2 border-neutral-200 rounded-lg p-3 text-sm placeholder-[#9DA4AE] text-[#020045] focus:outline-none focus:ring-2 focus:ring-[#F98800] focus:border-transparent transition"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-[#020045]" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border-2 border-neutral-200 rounded-lg p-3 text-sm placeholder-[#9DA4AE] text-[#020045] focus:outline-none focus:ring-2 focus:ring-[#F98800] focus:border-transparent transition"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-neutral-300 text-[#F98800] focus:ring-[#F98800]"
                />
                <span className="text-sm text-[#9DA4AE]">Remember me</span>
              </label>
              <Link href="/forgot-password">
                <span className="text-sm text-[#F98800] hover:underline">
                  Forgot Password?
                </span>
              </Link>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-[#F98800] text-white rounded-lg py-3 font-semibold hover:bg-[#E07A00] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.button>
          </form>
          <p className="text-center text-sm text-[#9DA4AE] mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register">
              <span className="text-[#F98800] hover:underline font-medium">Sign Up</span>
            </Link>
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default LoginPage;
