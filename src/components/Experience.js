import React from 'react';

const Experience = () => {
    return (
        <div className="bg-gray-800  p-10 flex items-center justify-center border-2 border-white">
            <div className="max-w-4xl w-full mx-auto bg-white shadow-xl rounded-lg overflow-hidden ">
                <div className="bg-gray-900 text-white text-lg font-bold p-4">
                    <h1>Work Experience</h1>
                </div>
                <div className="p-4">
                    <div className="text-gray-800 font-semibold mb-2">
                        <h2>Epic Lanka Pvt Ltd. - Software Engineer Intern</h2>
                        <p>Aug 2023 - Feb 2024</p>
                    </div>
                </div>
                <div className="bg-gray-900 p-4 text-white text-lg font-bold">
                    <h1>Projects</h1>
                </div>
                <div className="p-4">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">Document Management System for Sri Lanka Parliament</h2>
                        <p className="text-gray-700">Technology Used - React.js, Spring Boot, Redux, Thymeleaf</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Epic Card Management System</h2>
                        <p className="text-gray-700">Technology Used - React.js, Spring Boot, Redux, Microservices</p>
                    </div>
                </div>
                <div className="bg-gray-900 p-4 text-white text-lg font-bold">
                    <h1>Personal Projects</h1>
                </div>
                <div className="p-4">
                    <div className='mb-3'>
                        <h2 className="text-xl font-semibold">Shopping Cart Frontend Application</h2>
                        <p className="text-gray-700">Technology Used - React.js</p>
                    </div>
                    <div className='mb-3'>
                        <h2 className="text-xl font-semibold">Shopping Cart Backend Application</h2>
                        <p className="text-gray-700">Technology Used - Spring Boot</p>
                    </div>
                    <div className='mb-3'>
                        <h2 className="text-xl font-semibold">Employee Management System Frontend Application</h2>
                        <p className="text-gray-700">Technology Used - React.js</p>
                    </div>
                    <div className='mb-3'>
                        <h2 className="text-xl font-semibold">Employee Management System Backend Application</h2>
                        <p className="text-gray-700">Technology Used - Spring Boot</p>
                    </div>
                    <div className='mb-3'>
                        <h2 className="text-xl font-semibold">Workout Frontend Application</h2>
                        <p className="text-gray-700">Technology Used - React.js</p>
                    </div>
                    <div className='mb-3'>
                        <h2 className="text-xl font-semibold">Workout Backend Application</h2>
                        <p className="text-gray-700">Technology Used - Express.js, MongoDB</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Experience;
