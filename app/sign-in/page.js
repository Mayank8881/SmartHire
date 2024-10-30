"use client"
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AuthGuard from '../components/authGuard';

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");  // Clear the error message on submit
        try {
            if (!email || !password) {
                setError("Please fill all the fields");
                return;
            }

            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Credentials");
                return;
            }

            // Redirect to home page after successful login
            router.push("/");
            console.log("Successfully Sign in")

        } catch (err) {
            console.log("Sign-in error:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <>
        <AuthGuard>
            {/* <div className="grid place-items-center">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        placeholder="Email" 
                        required 
                    />
                    <input 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password" 
                        placeholder="Password" 
                        required 
                    />
                    <button type="submit" className="bg-blue-500">Login</button>

                    {error && (
                        <div style={{ color: "red" }}>
                            {error}
                        </div>
                    )}

                    <Link href="/sign-up">
                        Don't have an account? <u>Register</u>
                    </Link>
                </form>
            </div> */}
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                placeholder="Email" 
                required
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="Password" 
                required
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button 
                type="submit" 
                className="bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 transition-all transform hover:scale-105"
            >
                Login
            </button>
            
            {error && (
                <div className="text-red-500 text-sm text-center mt-2">
                    {error}
                </div>
            )}
            
            <p className="text-center text-gray-600 mt-4">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-blue-500 hover:underline transition">
                    Register
                </Link>
            </p>
        </form>
    </div>
</div>

            </AuthGuard>
        </>
    );
}

export default SignInPage;
