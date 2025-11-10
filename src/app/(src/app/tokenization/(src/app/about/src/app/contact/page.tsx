// src/app/contact/page.tsx

import React from 'react';

const ContactPage = () => {
    const deepBlue = 'text-[#191970]'; 
    const hunterGreen = 'text-[#008080]'; 

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. HERO & INTRODUCTION */}
                <header className="text-center mb-12">
                    <h1 className={`text-5xl font-extrabold ${hunterGreen} mb-4`}>
                        Connect with Orion Carbon.
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                        Whether for project feasibility, asset inquiries, or academy training, we are ready to assist.
                    </p>
                </header>

                {/* 2. CONTACT FORM SECTION (Placeholder for later integration) */}
                <section className="bg-white p-8 rounded-xl shadow-lg mb-12">
                    <h2 className={`text-3xl font-bold ${deepBlue} text-center mb-8`}>
                        Send Us an Enquiry
                    </h2>
                    
                    {/* NOTE: This form does not send data yet! It's the structure. 
                        You will later integrate a service like Formspree, Netlify Forms, or a custom API here (Optimization). */}
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#008080] focus:border-[#008080]" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#008080] focus:border-[#008080]" required />
                        </div>
                        <div>
                            <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Enquiry Topic</label>
                            <select id="topic" name="topic" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#008080] focus:border-[#008080]">
                                <option>Carbon Project Feasibility</option>
                                <option>Orion Academy Training</option>
                                <option>Tokenized Asset Purchase</option>
                                <option>General Enquiry</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#008080] focus:border-[#008080]" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className={`w-full py-3 px-6 text-lg font-bold bg-[#191970] text-white rounded-lg shadow-md hover:bg-opacity-90 transition duration-300`}>
                                Send Enquiry
                            </button>
                        </div>
                    </form>
                </section>
                
                {/* 3. DIRECT CONTACT INFO (Transparency) */}
                <section className="text-center p-6 bg-white rounded-xl shadow-lg">
                    <h2 className={`text-2xl font-bold ${hunterGreen} mb-4`}>
                        Orion Direct
                    </h2>
                    <p className="text-lg text-gray-700 mb-2">
                        **Email:** <a href="mailto:info@orioncarbon.co.za" className="text-[#191970] hover:underline">info@orioncarbon.co.za</a>
                    </p>
                    <p className="text-lg text-gray-700">
                        **Location:** Kathu, Northern Cape, South Africa
                    </p>
                </section>

            </div>
        </div>
    );
};

export default ContactPage;
