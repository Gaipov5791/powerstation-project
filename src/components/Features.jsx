import React from 'react';
import featureImage from '../assets/electricity.jpg';  // Add your image path here

const Features = () => {
    return (
        <div className="bg-gray-100 py-16" id='features'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:text-center">
                            <h2 className="text-3xl font-bold text-gray-600">НОВОСТИ</h2>
                            <p className="mt-4 font-semibold text-lg text-gray-600">Последние события и достижения нашей компании</p>
                        </div>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left Side: Text */}
                    <div className="w-full lg:w-1/2">
                        

                        <div className="mt-8">
                            <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-4">
                                <li>
                                    Завершение строительства малой ГЭС мощностью 2 МВт на реке Авлетим (80% готовности).
                                </li>
                                <li>
                                    Старт строительства каскада из трех малых ГЭС на реке Кара-Суу.
                                </li>
                                <li>
                                    Подписание меморандума о строительстве ГЭС на реке Чандалаш мощностью 30 МВт.
                                </li>
                                <li>
                                    Завершение трансформации земельного участка под ГЭС в Чандалашском районе.
                                </li>
                                <li>
                                    Исследование перспективного створа для ГЭС мощностью до 24 МВт в Кара-Кульжинском районе.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                            src={featureImage}
                            alt="Feature"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;

