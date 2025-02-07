import { useEffect, useState } from "react";
import Input from "../../components/Input";
import SocialButtons from "../../components/SocialButton";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import MainButton from "../../components/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { seller_register } from "../../store/Reducers/authReducer";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo, loader, errorMessage } = useSelector((state) => state.auth);

  const [state, setState] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    if (userInfo?.message) {
      toast.success(userInfo.message);
      navigate("/seller/dashboard");
    }
    if (errorMessage?.errors) {
      toast.error(errorMessage.errors);
    }
    if (errorMessage?.message) {
      toast.error(errorMessage.message);
    }
  }, [userInfo, errorMessage]);

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(seller_register(state));
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
          <MainButton text="Sign Up" loader={loader} className="my-4" />
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
