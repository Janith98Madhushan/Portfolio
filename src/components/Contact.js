import React from 'react';
import mobileLogo from "../assets/mobile.jpeg"
import gmailLogo from "../assets/gmail.jpeg"
import githubLogo from "../assets/github.png"
import linkedInLogo from "../assets/LinkedIn_icon.svg.png"

const Contact = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert('Message sent!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-800 border-2 border-white">
            <h1 className="text-2xl font-semibold mb-4">Contact Me</h1>
            
            <div className="flex flex-wrap justify-between -mx-3">
            <div className="flex-1 min-w-[300px] px-3 mb-6">
                <h2 className="text-xl font-bold mb-3">Links</h2>
                <ul className="list-none space-y-3">
                    <li className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                        <img src={mobileLogo} alt='mobileImg' className="h-10 w-10 rounded-full"/>
                        <span className="font-medium text-gray-800">+94 762757163</span>
                    </li>
                    <li className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                        <img src={gmailLogo} alt='gmailLogo' className="h-10 w-10 rounded-full"/>
                        <span>
                            <a href="mailto:janithmadhushan357@gmail.com" className="text-blue-500 hover:text-blue-600 pl-2 font-medium text-gray-800">janithmadhushan357@gmail.com</a>
                        </span>
                    </li>
                    <li className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                        <img src={linkedInLogo} alt='LinkedInImage' className="h-10 w-10 rounded-full"/>
                        <span>
                        <a href="https://www.linkedin.com/in/janith-madhushan-987647254/" className="text-blue-500 hover:text-blue-600 pl-2 font-medium text-gray-800">Janith Madhushan</a>
                        </span>
                    </li>
                    <li className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                        <img src={githubLogo} alt='GitHubLogo' className="h-10 w-10 rounded-full"/>
                        <span>
                        <a href="https://github.com/Janith98Madhushan" className="text-blue-500 hover:text-blue-600 pl-2 font-medium text-gray-800">Janith98Madhushan</a>
                        </span>
                    </li>
                </ul>
            </div>

                <div className="flex-1 min-w-[300px] px-3 mb-6">
                    <h2 className="text-xl font-bold mb-3">Chat with Me</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1 text-sm font-semibold" htmlFor="name">Your Name:</label>
                            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-semibold" htmlFor="email">Your Email:</label>
                            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-semibold" htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
