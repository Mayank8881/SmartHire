"use client";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() { // ✅ Ensure it's a default export
  return (
    <footer className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SmartHire</h3>
            <p className="text-blue-100 text-sm max-w-xs">
              Streamlining recruitment with AI-powered tools to save time and find the perfect candidates.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:contact@smarthire.com" className="hover:text-blue-200 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features</h3>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="#" className="hover:text-white transition-colors">Resume Shortlisting</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Interview Preparation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AI Matching</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Candidate Tracking</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">&copy; {new Date().getFullYear()} SmartHire. All rights reserved.</p>
          <p className="text-blue-100 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-300" /> by SmartHire Team
          </p>
        </div>
      </div>
    </footer>
  );
}
