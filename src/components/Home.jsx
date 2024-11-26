// import React from 'react';
// import backgroundImage from '../assets/img/гэс.jpg';

// const Home = () => {
//     return (
//         <div 
//             className="header bg-cover bg-center h-screen flex items-center justify-center" 
//             id='home'
//             style={{
//                 backgroundImage: `url(${backgroundImage})`, 
//                 backgroundSize: 'cover', 
//                 backgroundRepeat: 'no-repeat'
//             }}>
//             <div className="max-w-md px-4 py-8 bg-white bg-opacity-75 shadow-lg rounded-lg">
//                 <h2 className="text-2xl font-bold mb-4">Welcome to Our Website</h2>
//                 <p className="text-gray-700">This is a simple home page created with React and Tailwind CSS.</p>
//                 <p className="text-gray-700">Feel free to explore the different sections of our website.</p>
//             </div>
//         </div>
//     );
// };

// export default Home;

import React from 'react';
import backgroundImage from '../assets/гэс.jpg';

const Home = () => {
    return (
        <div 
            className="h-screen grid grid-cols-1 md:grid-cols-2 mb-8 sm:mb-12" 
            id='home'
        >
            {/* Left Side */}
            <div className="flex items-center justify-center order-2 md:order-1 bg-gradient-to-r from-blue-500 via-green-400 to-yellow-300">
                <div className="w-full max-w-sm px-6 py-6 text-white shadow-lg rounded-lg text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-4">
                        Добро пожаловать в "Эльбрус"
                    </h2>
                    <p className="text-xl mb-3">
                        Надёжность, инновации и качество — наш фундамент.
                    </p>
                    <p className="text-md text-xl mb-3">
                        Компания "Эльбрус" предлагает профессиональные строительные услуги 
                        для жилых, коммерческих и гидроэнергетических объектов.
                    </p>
                    <p className="text-md text-xl">
                        Доверьте нам реализацию ваших идей — мы воплощаем мечты в реальность!
                    </p>
                </div>
            </div>

            {/* Right Side */}
            <div
                className="bg-cover bg-center h-64 md:h-full w-full order-1 md:order-2"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            />
        </div>
    );
};

export default Home;



