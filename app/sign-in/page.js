"use client";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import AuthGuard from "../components/authGuard";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  // Redirect if already authenticated
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/ResumeLanding");
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    setIsLoading(true);

    try {
      if (!email || !password) {
        setError("Please fill all the fields");
        setIsLoading(false);
        return;
      }

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false, // Prevent NextAuth from handling redirects
      });

      console.log("SignIn Response:", res);

      if (!res || res.error) {
        setError("Invalid Credentials");
        setIsLoading(false);
        return;
      }

      // Refresh session and redirect
      router.push("/ResumeLanding");
      router.refresh();
    } catch (err) {
      console.error("Sign-in error:", err);
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <AuthGuard>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-center">
              Sign in to continue to your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-3 text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-3 text-gray-700"
                />
              </div>

              {error && (
                <Alert variant="destructive" className="mt-4">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition-all"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col">
            <p className="text-center text-gray-600 mt-2">
              Don't have an account?{" "}
              <Link
                href="/sign-up"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Create account
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </AuthGuard>
  );
};

export default SignInPage;
