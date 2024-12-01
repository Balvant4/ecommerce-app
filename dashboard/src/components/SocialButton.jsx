// components/SocialButtons.jsx

import { FaGoogle, FaFacebook } from "react-icons/fa";

const SocialButtons = ({ onGoogleClick, onFacebookClick }) => {
  return (
    <div className="flex justify-center gap-6">
      <button
        className="flex items-center justify-center w-12 h-12 text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-md hover:scale-105 transform transition-transform duration-200"
        onClick={onGoogleClick}
        aria-label="Sign in with Google"
      >
        <FaGoogle className="text-lg" />
      </button>
      <button
        className="flex items-center justify-center w-12 h-12 text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-md hover:scale-105 transform transition-transform duration-200"
        onClick={onFacebookClick}
        aria-label="Sign in with Facebook"
      >
        <FaFacebook className="text-lg" />
      </button>
    </div>
  );
};

export default SocialButtons;
