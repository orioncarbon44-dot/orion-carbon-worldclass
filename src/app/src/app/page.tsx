// src/app/page.tsx (The Home Page)

import React from 'react';
import Link from 'next/link'; 

const HomePage = () => {
    // Defined BMC Colors (used for visual clarity and professional branding)
    const deepBlue = 'text-[#191970]'; 
    const hunterGreen = 'text-[#008080]'; 
    const accentGoldBg = 'bg-[#FFD700]'; 

    return (
        <div className="min-h-screen bg-gray-50"> 
            
            {/* 1. HERO SECTION (High-Impact, colorful entrance) */}
            <section className="py-20 text-center bg-white shadow-lg border-b-4 border-[#008080]">
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className={`text-5xl md:text-6xl font-extrabold ${deepBlue} mb-4`}>
                        ORION CARBON: Integrity-Driven Climate Finance.
                    </h1>
                    <h2 className={`text-xl md:text-2xl font-semibold ${hunterGreen} mb-6`}>
                        We Convert Verified Climate Action into Tradeable, Blockchain-Secured Assets.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        **Three Pillars of Trust:** Verra Aligned. Blockchain Integrity. South African Led Expertise.
                    </p>

                    {/* Primary CTAs (Immediate Segmentation) */}
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link href="/development" className={`py-3 px-8 text-lg font-bold ${accentGoldBg} text-[#191970] rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
                            Launch Project Feasibility
                        </Link>
                        <Link href="/academy" className={`py-3 px-8 text-lg font-bold bg-[#008080] text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300`}>
                            Start Green Career Training
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. THE THREE PILLARS SNAPSHOT (Colorful and integrated) */}
            <section className="py-16 bg-gray-50">
                <h2 className={`text-3xl font-bold ${deepBlue} text-center mb-12`}>
                    Our World-Class Pillars
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    
                    {/* Pillar 1: Development (Rigor) */}
                    <PillarCard 
                        title="Carbon Development" 
                        description="Fast, done-for-you verification and issuance pipeline. Converts action to a verified asset." 
                        link="/development" 
                        color="border-l-[#191970]"
                    />

                    {/* Pillar 2: Tokenization (Optimization) */}
                    <PillarCard 
                        title="Tokenization Integrity" 
                        description="1:1-linked, audit-proof digital carbon assets on low-cost chains for corporate transparency." 
                        link="/tokenization" 
                        color="border-l-[#008080]"
                    />
                    
                    {/* Pillar 3: Academy (Ecosystem) */}
                    <PillarCard 
                        title="Orion Academy" 
                        description="Affordable, job-linked training for green careers. Creating an ecosystem: train → employ → grow." 
                        link="/academy" 
                        color="border-l-[#191970]"
                    />
                </div>
            </section>

        </div>
    );
};

// Helper Component for the Pillar Cards (Optimization)
interface PillarCardProps {
    title: string;
    description: string;
    link: string;
    color: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ title, description, link, color }) => (
    <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${color} hover:shadow-xl transition duration-300`}>
        <h3 className="text-2xl font-bold text-[#191970] mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className={`text-[#008080] font-semibold hover:underline`}>
            Learn More →
        </Link>
    </div>
);

export default HomePage;
