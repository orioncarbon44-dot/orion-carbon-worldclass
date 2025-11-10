// src/app/development/page.tsx

import React from 'react';
import Link from 'next/link'; 

const DevelopmentPage = () => {
    const deepBlue = 'text-[#191970]'; 
    const hunterGreen = 'text-[#008080]'; 
    const accentGold = 'bg-[#FFD700]'; 

    const processSteps = [
        { 
            number: 1, 
            title: "Initial Screening & Feasibility Study", 
            description: "We analyze your project against the latest Verra/Gold Standard methodology to confirm eligibility, establish the baseline, and estimate the credit volume potential. Principle: Truth."
        },
        { 
            number: 2, 
            title: "Project Design Document (PDD) Creation", 
            description: "Our team develops the full, auditor-ready PDD and supporting documentation, including Monitoring Plan and Stakeholder Consultation reports. Standard: Excellence."
        },
        { 
            number: 3, 
            title: "VVB Validation & Registry Submission", 
            description: "We coordinate all communication and documentation with the Verified Validation Body (VVB) to ensure a smooth, prompt validation and official project registration. Principle: Optimization."
        },
        { 
            number: 4, 
            title: "Ongoing Monitoring & Verification", 
            description: "We deploy technicians and technology (Orion Academy graduates) to conduct periodic verification of emission reductions and coordinate the final credit issuance. Principle: Transparency."
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* 1. HERO SECTION: DEVELOPMENT FOCUS */}
                <h1 className={`text-4xl md:text-5xl font-extrabold ${deepBlue} mb-4`}>
                    The Orion Development Pipeline.
                </h1>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6 font-medium">
                    We convert your project's climate impact into verified, saleable carbon credits through a transparent, four-stage process. **Nothing less than world-class.**
                </p>
                <Link href="#pipeline" className={`py-3 px-8 text-lg font-bold ${accentGold} ${deepBlue} rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
                    See Our 4-Step Process
                </Link>

                {/* 2. THE 4-STEP PIPELINE (Building Trust and Transparency) */}
                <div className="mt-16 text-left" id="pipeline">
                    <h2 className={`text-3xl font-bold ${hunterGreen} text-center mb-10`}>
                        Our World-Class 4-Stage Development Process
                    </h2>
                    
                    {processSteps.map((step) => (
                        <ProcessStep 
                            key={step.number}
                            number={step.number} 
                            title={step.title} 
                            description={step.description}
                        />
                    ))}
                </div>

                {/* 3. CALL TO ACTION */}
                <div className="mt-16 p-8 bg-white shadow-lg rounded-xl">
                    <h2 className={`text-3xl font-bold ${deepBlue} mb-4`}>Start Your Project Assessment Now</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Contact us to begin the initial feasibility study and align your project with global compliance standards.
                    </p>
                    <Link href="/contact" className={`py-3 px-8 text-lg font-bold bg-[#008080] text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300`}>
                        Request Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Helper Component for clean, reusable code (Optimization)
interface ProcessStepProps {
    number: number;
    title: string;
    description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
    <div className="flex items-start mb-8 p-6 bg-white shadow-md rounded-lg border-l-4 border-[#191970]">
        <div className={`text-2xl font-bold text-white bg-[#191970] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4`}>
            {number}
        </div>
        <div>
            <h3 className={`text-xl font-semibold text-[#008080] mb-1`}>{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

export default DevelopmentPage;
