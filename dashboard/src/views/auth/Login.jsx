import { useState, useCallback } from "react";
import Input from "../../components/Input";
import SocialButtons from "../../components/SocialButton";
import { MdEmail, MdLock } from "react-icons/md";
import MainButton from "../../components/MainButton";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const inputHandle = useCallback((e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500">
      <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Welcome Back
        </h2>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            icon={MdEmail}
            value={state.email}
            onChange={inputHandle}
          />
          <Input
            name="password"
            type="password"
            placeholder="Your Password"
            icon={MdLock}
            value={state.password}
            onChange={inputHandle}
          />
          <MainButton text="Login" />
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-500 underline">
            Sign Up
          </a>
        </p>
        <div className="flex items-center my-6">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">Or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <SocialButtons
          onGoogleClick={() => alert("Google Signup")}
          onFacebookClick={() => alert("Facebook Signup")}
        />
      </div>
    </div>
  );
};

export default Login;
