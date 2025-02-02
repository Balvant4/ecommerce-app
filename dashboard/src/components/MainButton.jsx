import React from "react";
import { PropagateLoader } from "react-spinners";

function MainButton({ text, className, onClick, loader }) {
  const overrideStyle = {
    display: "flex",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <button
      onClick={onClick}
      disabled={loader}
      type="submit"
      className={`w-full px-4 py-3 text-white font-medium bg-indigo-500 rounded-lg hover:bg-indigo-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loader ? (
        <PropagateLoader color="#fff" cssOverride={overrideStyle} />
      ) : (
        text
      )}
    </button>
  );
}

export default MainButton;
