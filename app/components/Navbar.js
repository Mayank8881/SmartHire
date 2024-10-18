"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logout from './logout';
import { useSession } from 'next-auth/react';

export default function Navbar() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#AADEEF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3">
                            <Image src='/assets/logo.png' width={90} height={120} alt="SmartHire Logo" />
                            <span className="text-3xl ml-10 sm:ml-0 sm:text-4xl font-semibold text-[#3B82F6]">SmartHire</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex space-x-4">
                            <Link href="/" className="text-[#3B82F6] hover:text-black px-3 py-2 rounded-md text-lg font-medium">
                                Dashboard
                            </Link>
                            <Link href="/" className="text-[#3B82F6] hover:text-black px-3 py-2 rounded-md text-lg font-medium">
                                Features
                            </Link>
                            <Link href="/" className="text-[#3B82F6] hover:text-black px-3 py-2 rounded-md text-lg font-medium">
                                About
                            </Link>
                            {session && (
                                <>
                                    {/* Link to Profile page */}
                                    <Link href="/profile" className="focus:outline-none">
                                        <Image src="/assets/person.png" alt="Profile" width={45} height={45} className="rounded-full" />
                                    </Link>
                                    <div>
                                        <Logout />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleDrawer}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#3B82F6] hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm md:hidden"
                    onClick={toggleDrawer}
                ></div>
            )}

            <div
                className={`fixed inset-y-0 right-0 w-64 bg-[#AADEEF] overflow-y-auto transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden z-50`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/" className="text-[#3B82F6] hover:text-black block px-3 py-2 rounded-md text-base font-medium" onClick={toggleDrawer}>
                        Dashboard
                    </Link>
                    <Link href="/" className="text-[#3B82F6] hover:text-black block px-3 py-2 rounded-md text-base font-medium" onClick={toggleDrawer}>
                        Features
                    </Link>
                    <Link href="/" className="text-[#3B82F6] hover:text-black block px-3 py-2 rounded-md text-base font-medium" onClick={toggleDrawer}>
                        About
                    </Link>
                    {session && (
                        <>
                            <Link href="/profile" className="flex items-center text-[#3B82F6] hover:text-black px-3 py-2 rounded-md text-base font-medium">
                                <Image src="/assets/person.png" alt="Profile" width={35} height={35} className="rounded-full mr-2" />
                                <span>Profile</span>
                            </Link>
                            <div>
                                <Logout />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
