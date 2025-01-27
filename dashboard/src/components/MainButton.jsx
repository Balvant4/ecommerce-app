import React from "react";

function MainButton({ text, className, onChange, onClick }) {
  return (
    <button
      onClick={onClick}
      onChange={onChange}
      type="submit"
      className={` px-4 py-3 text-white font-medium bg-indigo-700 rounded-lg hover:bg-indigo-900 transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
}

export default MainButton;
