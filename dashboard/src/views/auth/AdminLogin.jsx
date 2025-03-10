import { useState, useCallback, useEffect } from "react";
import Input from "../../components/Input"; // Reusing Input component
import { MdEmail, MdLock } from "react-icons/md";
import logo from "../../../public/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { admin_login } from "../../store/Reducers/authReducer";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import MainButton from "../../components/MainButton";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  // State initialization
  const [state, setState] = useState({ email: "", password: "" });

  // Optimized input handler
  const inputHandle = useCallback((e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Form submit handler
  const submit = (e) => {
    e.preventDefault();
    // Dispatch action with state as payload
    dispatch(admin_login(state));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
    if (successMessage) {
      toast.success(successMessage);
      navigate("/");
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500">
      <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
        {/* Logo */}
        <div className="flex justify-center">
          <img className="w-[20rem] mb-4" src={logo} alt="Admin Logo" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Admin Login
        </h2>
        <form onSubmit={submit} className="mt-8 space-y-4">
          {/* Reusable Input Components */}
          <Input
            name="email"
            type="email"
            placeholder="Admin Email"
            icon={MdEmail}
            value={state.email}
            onChange={inputHandle}
          />
          <Input
            name="password"
            type="password"
            placeholder="Admin Password"
            icon={MdLock}
            value={state.password}
            onChange={inputHandle}
          />
          {/* Submit Button */}
          <MainButton text="Login" loader={loader} className="my-4" />
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
