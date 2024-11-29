import { useState, useCallback } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import logo from "../../../public/images/logo.png";
const AdminLogin = () => {
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
        {/* Image */}
        <div className=" flex justify-center">
          <img className=" w-[20rem]" src={logo} alt="logoimage" />
        </div>
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
      </div>
    </div>
  );
};

export default AdminLogin;
