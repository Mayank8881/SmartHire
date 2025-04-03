"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Logout from "./logout"
import { useSession } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="shadow-2xl bg-indigo-100 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center -ml-8">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/assets/logo.png" width={70} height={90} alt="SmartHire Logo" />
              <span className="text-3xl font-semibold text-[#3B82F6]">SmartHire</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
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
              <div className="flex items-center space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <Image
                      src="/assets/person.png"
                      alt="Profile"
                      width={40}
                      height={40}
                      className="rounded-full hover:ring-2 hover:ring-[#3B82F6] transition-all"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-2 py-1.5 text-sm font-medium">
                      <p className="text-[#3B82F6]">Profile</p>
                    </div>
                    <DropdownMenuSeparator />
                    <div className="px-2 py-1.5 text-sm">
                      <p className="truncate">
                        <strong>Email:</strong> {session.user.email}
                      </p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <div className="cursor-pointer w-full">
                        <Logout />
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleDrawer}
              className="p-2 rounded-md text-[#3B82F6] hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={toggleDrawer}></div>
          <div
            className={`fixed inset-y-0 right-0 w-64 bg-[#AADEEF] transition-transform transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="px-6 pt-5 space-y-4">
              <Link
                href="/"
                onClick={toggleDrawer}
                className="block text-[#3B82F6] hover:text-black py-2 rounded-md text-lg font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/"
                onClick={toggleDrawer}
                className="block text-[#3B82F6] hover:text-black py-2 rounded-md text-lg font-medium"
              >
                Features
              </Link>
              <Link
                href="/"
                onClick={toggleDrawer}
                className="block text-[#3B82F6] hover:text-black py-2 rounded-md text-lg font-medium"
              >
                About
              </Link>
              {session && (
                <div className="pt-4 border-t border-gray-200">
                  <div className="bg-white rounded-md p-3 shadow-sm">
                    <p className="text-[#3B82F6] font-medium mb-2">Profile</p>
                    <p className="text-sm truncate mb-2">
                      <strong>Email:</strong> {session.user.email}
                    </p>
                    <Logout />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

