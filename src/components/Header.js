import React, { useState } from "react";
import img1 from "../assets/IMG_1841.jpg";
import { ChatModal } from "./ChatModal";
import ReactImg from "../assets/react.png";
import SBoot from "../assets/sprin boot.png"; // Make sure file names are correctly spelled
import java from "../assets/Java-Logo.jpg";
import mysql from "../assets/mysql-ar21.png";
import mongo from "../assets/mongo_logo.jpg";
import node from "../assets/node.png";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const techStackImages = [
    { src: ReactImg, alt: "React.js" },
    { src: SBoot, alt: "Spring Boot" },
    { src: java, alt: "Java" },
    { src: mysql, alt: "MySQL" },
    { src: mongo, alt: "MongoDB" },
    { src: node, alt: "Node.js" },
  ];

  return (
    <div className="flex flex-col md:flex-row pt-5 pb-10 bg-gray-800 ">
      <div className="flex-1 flex items-center justify-center">
        <header className="text-white text-center md:text-left py-20">
          <h1 className="text-sm font-serif mb-1">Hi, my name is,</h1>
          <h1 className="text-4xl font-bold mb-2">Janith Madhushan</h1>
          <p className="text-xl mb-4">
            Software Engineer from Colombo, Sri Lanka
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="transition duration-300 ease-in-out transform hover:-translate-y-1 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
          >
            Get In Touch
          </button>
        </header>
      </div>

      <ChatModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      <div className="flex-1 flex flex-col items-center justify-center bg-gray-800 p-5">
        <img
          src={img1}
          alt="Profile"
          className="w-64 h-64 rounded-full shadow-xl mb-4 hover:shadow-2xl transition-shadow duration-300"
        />
        <div className="flex flex-col items-center py-4 p-5">
          <h3 className="text-white text-xl font-bold mb-2">Tech Stack</h3>
          <ul className="grid grid-cols-3 gap-4 text-center p-3">
            {techStackImages.map((img, index) => (
              <li
                key={index}
                className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-8 mx-auto mb-1 rounded-full"
                />
                {img.alt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
