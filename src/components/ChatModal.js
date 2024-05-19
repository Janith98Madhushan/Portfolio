import React, { useState } from "react";

export const ChatModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSendMessage = () => {
    const message = encodeURIComponent("Hello, I'd like more information.");
    window.open(`https://wa.me/+94762757163?text=${message}`, "_blank");
    onClose(); // Close the modal after opening WhatsApp
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white rounded-xl p-6 shadow-2xl z-50 border border-gray-200">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-lg font-bold text-gray-600 hover:text-gray-800"
      >
        ×
      </button>
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Get in Touch</h2>
      <p className="text-gray-600 text-sm mb-4">
        Have any questions? Send me a message on WhatsApp!
      </p>
      <button
        onClick={handleSendMessage}
        className="mt-2 bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
      >
        Send a Message
      </button>
    </div>
  );
};
