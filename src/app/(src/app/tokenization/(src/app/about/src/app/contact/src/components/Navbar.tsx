// src/components/Navbar.tsx

import React from 'react';
import Link from 'next/link'; 

// This component uses Tailwind CSS for a responsive, fixed navigation bar.
const Navbar = () => {
    // Define the colors for clarity and Excellence
    const deepBlue = 'bg-[#191970]'; // Background: Deep Midnight Blue
    const hunterGreen = 'text-[#008080]'; // Accent Text: Hunter Green
    const accentGold = 'bg-[#FFD700]'; // CTA Button: Accent Gold

    // Define the main navigation links for easy access to all pillars
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Development', href: '/development' },
        { name: 'Tokenization', href: '/tokenization' },
        { name: 'Academy', href: '/academy' },
        { name: 'About Us', href: '/about' },
    ];

    return (
        // Fixed positioning ensures the bar is always visible (Optimization)
        <nav className={`w-full ${deepBlue} shadow-xl sticky top-0 z-50`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* 1. Logo/Branding Section (Always link back Home) */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-extrabold text-white tracking-wider">
                            ORION CARBON
                        </Link>
                    </div>

                    {/* 2. Primary Navigation Links (Hidden on small screens) */}
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-4 items-center">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name}
                                href={link.href}
                                className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        {/* 3. CTA Button (High-Visibility Accent Gold) */}
                        <Link 
                            href="/contact" 
                            className={`ml-4 px-4 py-2 text-sm font-bold ${accentGold} text-[#191970] rounded-md hover:bg-yellow-500 transition duration-150`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* 4. Mobile Menu Button (Placeholder for responsiveness) */}
                    {/* NOTE: For brevity, the full mobile toggle logic is omitted, but the structure is responsive. */}
                    <div className="sm:hidden">
                        <button className="text-white hover:text-gray-300 p-2 rounded-md">
                            {/* SVG Icon Placeholder */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
