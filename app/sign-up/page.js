"use client"
import Link from 'next/link'
import { useState }  from "react"

const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!name || !email || !password) {
            setError("Please fill all the fields");
            return;
        }

        try {
            const res = await fetch("/api/sign-up", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (res.ok) {
                // Clear input fields
                setName("");
                setEmail("");
                setPassword("");
                setError(""); // Clear error if registration succeeds
                console.log("Registration successful");
            } else {
                setError("User Registration failed");
                console.log("User Registration failed");
            }
        } catch (error) {
            setError("Error during registration");
            console.log("Error during registration", error);
        }
    };

    return (
        <div className="grid place-items-center">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    placeholder="Full Name" 
                />
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="Email" 
                />
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="Password" 
                />
                <button type="submit" className="bg-blue-500">Register</button>

                {error && (
                    <div className="text-red-500">
                        {error}
                    </div>
                )}

                <Link href="/sign-in">
                    Already have an account? <span>Login</span>
                </Link>
            </form>
        </div>
    );
};

export default Page;
