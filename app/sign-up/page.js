"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthGuard from '../components/authGuard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        if (!name || !email || !password) {
            setError("Please fill all the fields");
            setIsLoading(false);
            return;
        }

        try {
            const resUser = await fetch("/api/user-exists", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const { user } = await resUser.json();
            if (user) {
                setError("Email already exists");
                setIsLoading(false);
                return;
            }

            const res = await fetch("/api/sign-up", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            if (res.ok) {
                setName("");
                setEmail("");
                setPassword("");
                router.push("/ResumeLanding");
            } else {
                setError("User registration failed");
            }
        } catch (error) {
            setError("Error during registration");
        }
        setIsLoading(false);
    };

    return (
        <AuthGuard>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                <Card className="w-full max-w-md shadow-lg">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
                        <CardDescription className="text-center">Join us and start your journey</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            {error && (
                                <Alert variant="destructive" className="mt-4">
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}
                            <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition-all" disabled={isLoading}>
                                {isLoading ? "Registering..." : "Sign Up"}
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <p className="text-center text-gray-600 mt-2">
                            Already have an account?{' '}
                            <Link href="/sign-in" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                Sign in
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </AuthGuard>
    );
};

export default SignUpPage;
