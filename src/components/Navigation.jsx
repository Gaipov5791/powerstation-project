import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logoImage from '../assets/logo.png';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollSmoothHandler = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            toggleMenu(); // Close the mobile menu after clicking on a link
        }
        console.log(element)
    };
    
    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-md z-50" id='logo'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
                    {/* Logo Image */}
                    <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={logoImage}
                        alt="Эльбрус logo"
                    />

                    {/* Text Content */}
                    <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left sm:flex hidden w-full">
                        <a
                            className="text-white text-lg font-bold tracking-widest w-full"
                            href="#"
                        >
                            <span className="block w-full text-center">Эльбрус</span>
                        </a>
                        <a
                            className="text-white uppercase w-full small-text"
                            href="#"
                        >
                            Строительная компания
                        </a>
                    </div>

                </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="flex space-x-4">
                            <a 
                                href="#home" 
                                className="text-gray-300 hover:bg-gray-700 
                                hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => scrollSmoothHandler('home')}
                            >ГЛАВНАЯ</a>
                            <a 
                                href="#about" 
                                className="text-gray-300 hover:bg-gray-700 
                                hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => scrollSmoothHandler('about')}
                            >О НАС</a>
                            <a 
                                href="#features" 
                                className="text-gray-300 hover:bg-gray-700 
                                hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => scrollSmoothHandler('features')}
                            >НОВОСТИ</a>
                            <a 
                                href="#gallery" 
                                className="text-gray-300 hover:bg-gray-700 
                                hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => scrollSmoothHandler('gallery')}
                            >ГАЛЛЕРЕЯ</a>
                            <a 
                                href="#contact" 
                                className="text-gray-300 hover:bg-gray-700 
                                hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => scrollSmoothHandler('contact')}
                            >КОНТАКТЫ</a>
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="text-gray-400 hover:text-white focus:outline-none 
                            focus:text-white">
                        {isOpen ? 
                            <AiOutlineClose className="h-6 w-6" /> : 
                            <AiOutlineMenu className="h-6 w-6" />
                        }
                        </button>
                    </div>
                </div>
            </div>
            {/* Responsive Menu */}
            <div 
                className={`md:hidden transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a 
                        href="#home" 
                        className="text-gray-300 hover:bg-gray-200 hover:text-gray-600 
                        block px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => scrollSmoothHandler('home')}
                    >
                        ГЛАВНАЯ
                    </a>
                    <a 
                        href="#about" 
                        className="text-gray-300 hover:bg-gray-200 hover:text-gray-600 
                        block px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => scrollSmoothHandler('about')}
                    >
                        О НАС
                    </a>
                    <a 
                        href="#features" 
                        className="text-gray-300 hover:bg-gray-200 hover:text-gray-600 
                        block px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => scrollSmoothHandler('features')}
                    >
                        НОВОСТИ
                    </a>
                    <a 
                        href="#gallery" 
                        className="text-gray-300 hover:bg-gray-200 hover:text-gray-600 
                        block px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => scrollSmoothHandler('gallery')}
                    >
                        ГАЛЛЕРЕЯ
                    </a>
                    <a 
                        href="#contact" 
                        className="text-gray-300 hover:bg-gray-200 hover:text-gray-600 
                        block px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => scrollSmoothHandler('contact')}
                    >
                        КОНТАКТЫ
                    </a>
                </div>
            </div>

        </nav>
    );
};

export default Navigation;

