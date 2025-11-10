// src/app/about/page.tsx

import React from 'react';
import Link from 'next/link'; 

const AboutPage = () => {
    const deepBlue = 'text-[#191970]'; 
    const hunterGreen = 'text-[#008080]'; 

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. HERO SECTION: MISSION */}
                <header className="text-center mb-12">
                    <h1 className={`text-5xl font-extrabold ${deepBlue} mb-4`}>
                        Driven by Truth. Defined by Excellence.
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium">
                        Orion Carbon provides world-class financial technology and education tailored for the South African climate finance market.
                    </p>
                </header>

                {/* 2. THE CORE STORY / PRINCIPLES */}
                <section className="bg-white p-8 rounded-xl shadow-lg mb-12">
                    <h2 className={`text-3xl font-bold ${hunterGreen} mb-6 border-b pb-2`}>
                        Our Operating Principles
                    </h2>
                    <div className="space-y-6 text-lg text-gray-700">
                        <PrincipleCard 
                            title="Truth & Rigor" 
                            description="We adhere strictly to international verification standards (Verra, Gold Standard) to ensure carbon assets are real, permanent, and accurate." 
                            color="border-l-[#191970]"
                        />
                        <PrincipleCard 
                            title="Excellence & Optimization" 
                            description="We streamline complex processes using AI and blockchain (tokenization) to deliver results faster, reducing overhead for developers." 
                            color="border-l-[#008080]"
                        />
                        <PrincipleCard 
                            title="Transparency & Empowerment" 
                            description="We are committed to clear communication and education (Orion Academy), building capacity within the region and empowering local professionals." 
                            color="border-l-[#191970]"
                        />
                    </div>
                </section>

                {/* 3. CALL TO ACTION */}
                <footer className="text-center mt-12">
                    <h2 className={`text-3xl font-bold ${deepBlue} mb-4`}>
                        Ready to Partner with Integrity?
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Explore our specific pillars or connect directly to discuss your project needs.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link href="/development" className={`py-3 px-6 text-lg font-bold bg-[#008080] text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300`}>
                            See Development Services
                        </Link>
                        <Link href="/contact" className={`py-3 px-6 text-lg font-bold bg-gray-300 text-[#191970] rounded-lg shadow-md hover:bg-gray-400 transition duration-300`}>
                            Contact Us
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
};

// Helper Component (Optimization)
interface PrincipleCardProps {
    title: string;
    description: string;
    color: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ title, description, color }) => (
    <div className={`p-4 rounded-md border-l-4 ${color} bg-gray-50 shadow-sm`}>
        <h3 className="text-xl font-semibold text-[#191970] mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default AboutPage;
