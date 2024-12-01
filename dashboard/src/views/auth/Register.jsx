import { useState } from "react";
import Input from "../../components/Input";
import SocialButtons from "../../components/SocialButton";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";

const Register = () => {
  const [state, setState] = useState({ name: "", email: "", password: "" });

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500">
      <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Create an Account
        </h2>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <Input
            name="name"
            type="text"
            placeholder="Your Username"
            icon={MdPerson}
            value={state.name}
            onChange={inputHandle}
          />
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
          <button
            type="submit"
            className="w-full px-4 py-3 text-white font-medium bg-indigo-500 rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-500 underline">
            Log In
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

export default Register;
