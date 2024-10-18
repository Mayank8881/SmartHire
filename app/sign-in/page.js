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

        } catch (err) {
            console.log("Sign-in error:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <>
        <AuthGuard>
            <div className="grid place-items-center">
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
            </div>
            </AuthGuard>
        </>
    );
}

export default SignInPage;
