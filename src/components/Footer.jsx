// components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <p className="text-gray-300">© 2024 Your Company. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;