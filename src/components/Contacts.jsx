import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_zmdj1pi", "template_847rtgg", form.current, {
                publicKey: "h-j0xBlXdWjifeU98",
            })
            .then(() => {
                console.log("SUCCESS!");
            }),
            (error) => {
                console.log("FAILED...", error.text);
            };
    };
        

    return (
        <div className="bg-gray-100 py-16" id='contact'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-600">СВЯЖИТЕСЬ С НАМИ</h2>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Form */}
            <div className="bg-white p-8 shadow-md rounded-lg">
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                    </label>
                    <input
                    type="text"
                    name="from_name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                    </label>
                    <input
                    type="email"
                    name="from_email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                    </label>
                    <textarea
                    name="message"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    rows="4"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
                >
                    Напишите нам
                </button>
                </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 shadow-md rounded-lg">
                <h3 className="text-lg font-bold text-gray-600">НАШИ КОНТАКТЫ</h3>
                <p className="mt-4 text-sm text-gray-600">Вы можете связаться с нами следующими способами:</p>
                <ul className="mt-6 space-y-2">
                <li>
                    <strong>Страна:</strong> Kыргызкая Республика
                </li>
                <li>
                    <strong>Адрес:</strong> г.Бишкек, ул. И. Раззакова 19
                </li>
                <li>
                    <strong>Телефон:</strong> +996 551 04 04 57
                </li>
                <li>
                    <strong>Электронная почта:</strong> sk.elbrus777@mail.ru
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Contacts;
