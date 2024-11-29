import { useState, useCallback } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  // State initialization for email and password
  const [state, setState] = useState({ email: "", password: "" });

  // Optimized input handle with destructuring
  const inputHandle = useCallback((e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  // Form submit handler
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
    // Handle your login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500">
      <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600">
          Please log in to your account
        </p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          {/* Email Input */}
          <div className="relative">
            <MdEmail className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              name="email"
              id="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              onChange={inputHandle}
              value={state.email}
              aria-label="Email Address"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <MdLock className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              name="password"
              id="password"
              type="password"
              required
              placeholder="Your Password"
              className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              onChange={inputHandle}
              value={state.password}
              aria-label="Password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 text-white font-medium bg-indigo-500 rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?
          <a href="/register" className="text-indigo-500 underline">
            Sign Up
          </a>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">Or</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6">
          <button
            className="flex items-center justify-center w-12 h-12 text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-md hover:scale-105 transform transition-transform duration-200"
            onClick={() => alert("Google Signup")}
            aria-label="Sign in with Google"
          >
            <FaGoogle className="text-lg" />
          </button>
          <button
            className="flex items-center justify-center w-12 h-12 text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-md hover:scale-105 transform transition-transform duration-200"
            onClick={() => alert("Facebook Signup")}
            aria-label="Sign in with Facebook"
          >
            <FaFacebook className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
