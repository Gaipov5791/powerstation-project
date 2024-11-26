import React from 'react';
import aboutImage from '../assets/about.jpg';

const About = () => {
    return (
        <div className="bg-gray-100 py-12 sm:py-16" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 mt-8 sm:mt-12">
                        О НАС
                    </h2>
                    <p className="mt-4 font-semibold text-base sm:text-lg text-gray-600">
                        "Мы создаем энергию для будущего!"
                    </p>
                </div>
                <div className="mt-12 sm:mt-20">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
                        {/* Left Image Section */}
                        <div className="w-full sm:w-1/2">
                            <img
                                className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                                src={aboutImage}
                                alt="About Us"
                            />
                        </div>
                        {/* Right Text Section */}
                        <div className="w-full sm:w-1/2">
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                ОсОО "Строительная компания Эльбрус" — эксперт в строительстве малых гидроэлектростанций (ГЭС).
                                Наша компания не только проектирует и строит современные энергосистемы, но и оказывает полный спектр услуг:
                                от выбора перспективных створов до юридического сопровождения проектов.
                            </p>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-6">
                                Мы гордимся нашими достижениями:
                            </h3>
                            <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2 mt-4">
                                <li>
                                   <span className='font-semibold'>Опыт в крупных проектах:</span>  участие в строительстве малой ГЭС мощностью 3 МВт в Ыссык-Атинском районе в качестве консультанта.
                                </li>
                                <li>
                                    <span className='font-semibold'>Текущие проекты:</span> строительство малой ГЭС мощностью 2 МВт на реке Авлетим, находящееся на финальной стадии реализации (готовность 80%).
                                </li>
                                <li>
                                    <span className='font-semibold'>Перспективы:</span> старт строительства каскада из трех малых ГЭС на реке Кара-Суу и меморандум о возведении ГЭС мощностью 30 МВт на реке Чандалаш.
                                </li>
                            </ul>
                            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                                Наша команда состоит из высококвалифицированных инженеров с международным опытом, а также специалистов с более чем 40-летним стажем в гидроэнергетике.
                                Совместная работа с партнерами из Европы позволяет нам применять передовые технологии и подходы.
                            </p>
                            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                                Мы вносим значительный вклад в развитие региона, обеспечивая рабочие места для более 50 сотрудников, а также поддерживая более 150 специалистов из смежных отраслей.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;


