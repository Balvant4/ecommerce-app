import React, { useState } from "react";
import Select from "react-select";
import MainButton from "../../components/MainButton";
import Input from "../../components/Input";
import TextareaField from "../../components/TextareaField";
import { Link } from "react-router-dom";

function AddProduct() {
  // Example dynamic category data
  const books = [
    { value: "History", label: "History" },
    { value: "Science", label: "Science" },
    { value: "Fiction", label: "Fiction" },
    { value: "Biography", label: "Biography" },
    { value: "Philosophy", label: "Philosophy" },
  ];

  const [state, setState] = useState({
    productname: "",
    brandname: "",
    category: null, // Set initial category to null
    productstock: "",
    price: "",
    discount: "",
    description: "",
    image: null, // This will hold the image file
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption) => {
    setState((prevState) => ({
      ...prevState,
      category: selectedOption || null, // Reset category state
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setState((prevState) => ({
      ...prevState,
      image: file, // Store the file in state
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault(); // Prevent form submission (page reload)
    console.log(state); // For debugging: Check what data is being submitted

    // Here, you would send the form data to the server (e.g., an API call)

    // Reset form fields after submission
    setState({
      productname: "",
      brandname: "",
      category: null, // Reset category
      productstock: "",
      price: "",
      discount: "",
      description: "",
      image: null, // Reset image field
    });

    // Manually reset the file input field
    document.getElementById("image").value = null;
  };

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#1f2937", // Tailwind gray-900
      border: "1px solid #374151", // Tailwind gray-700
      borderRadius: "0.375rem", // Rounded-lg
      boxShadow: "none",
      padding: "5px",
      color: "white", // Add text color
      "&:hover": {
        borderColor: "#4b5563", // Tailwind gray-600
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#1f2937", // Tailwind gray-900
      borderRadius: "0.375rem",
      border: "1px solid #374151", // Tailwind gray-700
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#374151" : "#1f2937", // Hover gray-700
      color: "#f9fafb", // Tailwind gray-50
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#f9fafb", // Tailwind gray-50 for selected value
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af", // Tailwind gray-400 for placeholder
    }),
    input: (provided) => ({
      ...provided,
      color: "#f9fafb", // Tailwind gray-50 for typed text
    }),
  };

  return (
    <div className="px-6 py-8 sm:px-10 lg:px-12">
      <div className="p-6 rounded-lg bg-chartbgcolor shadow-md">
        {/* Header section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="sm:text-3xl text-xl sm:font-semibold font-bold text-white">
            Add Product
          </h1>
          <Link to="/seller/dashboard/all-product">
            <MainButton text="All Products" className="sm:w-40 w-32 " />
          </Link>
        </div>

        {/* Form section */}
        <form className="space-y-8" onSubmit={handlesubmit}>
          {/* Input grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              className="border border-gray-700 rounded-lg bg-gray-900 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="productname"
              type="text"
              placeholder="Product Name"
              label="Product Name"
              onChange={handleChange}
              value={state.productname}
            />
            <Input
              className="border border-gray-700 rounded-lg bg-gray-900 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="brandname"
              type="text"
              placeholder="Brand Name"
              label="Brand Name"
              onChange={handleChange}
              value={state.brandname}
            />
            <div className="relative">
              <label className="block text-white text-sm font-medium mb-3">
                Category
              </label>
              <Select
                options={books}
                styles={customStyles}
                onChange={handleSelectChange}
                placeholder="Select a category"
                value={
                  state.category
                    ? books.find((option) => option.value === state.category)
                    : null
                } // Update selected value
              />
            </div>
            <Input
              className="border border-gray-700 rounded-lg bg-gray-900 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="productstock"
              type="number"
              placeholder="Product Stock"
              label="Product Stock"
              onChange={handleChange}
              value={state.productstock}
            />
            <Input
              className="border border-gray-700 rounded-lg bg-gray-900 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="price"
              type="number"
              placeholder="Price"
              label="Price"
              onChange={handleChange}
              value={state.price}
            />
            <Input
              className="border border-gray-700 rounded-lg bg-gray-900 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="discount"
              type="number"
              placeholder="% Discount"
              label="Discount"
              onChange={handleChange}
              value={state.discount}
            />
          </div>

          {/* Description field */}
          <TextareaField
            onChange={handleChange}
            value={state.description}
            placeholder="Product Description"
            label="Description"
            name="description"
            className="border border-gray-700 rounded-lg bg-gray-900 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />

          {/* Image upload section */}
          <div className="flex flex-col items-center justify-center py-8 px-6 bg-gray-900 rounded-lg shadow-inner">
            <label
              htmlFor="image"
              className="text-lg font-medium text-white mb-4 cursor-pointer hover:text-blue-400"
            >
              Upload Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="text-sm text-gray-300 bg-transparent border border-gray-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer hover:border-blue-300"
              onChange={handleImageChange}
            />
          </div>

          {/* Submit button */}
          <div className="text-right">
            <MainButton
              text="Add Product"
              className="w-full px-6 py-3 text-lg"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
