// components/ScrollToTopButton.js
import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    return (
        <button onClick={scrollToTop} className="fixed bottom-4 right-4 bg-gray-800 
        text-white px-4 py-2 rounded-full shadow-mdhover:bg-gray-700 focus:outline-none">
        <FaArrowCircleUp/>
        </button>
    );
};

export default ScrollToTopButton;