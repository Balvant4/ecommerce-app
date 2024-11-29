// src/components/SocialButton.jsx
import React from "react";

const SocialButton = ({ icon, label, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-full px-4 py-2 border rounded-lg ${color} hover:shadow-lg transition duration-300`}
    >
      {icon}
      <span className="ml-2 text-sm font-medium">{label}</span>
    </button>
  );
};

export default SocialButton;
