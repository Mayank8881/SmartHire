import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav class="bg-[#AADEEF] h-20">
            <div class="flex flex-wrap items-center justify-between mx-auto p-2">
                <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src='/assets/logo.png' width={90} height={120} />
                    <span class="text-4xl font-semibold dark:text-[#3B82F6]">SmartHire</span>
                </a>
                <div className="hidden md:flex space-x-6 items-center text-xl">
                    <Link href="/" className="text-[#3B82F6] hover:text-black">
                        Dashboard
                    </Link>
                    <Link href="/" className="text-[#3B82F6] hover:text-black">
                        Features
                    </Link>
                    <Link href="/" className="text-[#3B82F6] hover:text-black">
                        About
                    </Link>
                    <Link href="/">
                        <Image src="/assets/person.png" alt="Profile" width={45} height={45} className="rounded-full"/>
                    </Link>
                </div>

            </div>
        </nav>

    );
}
