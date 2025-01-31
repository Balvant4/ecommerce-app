import React, { useEffect, useState } from "react";
import MainButton from "../../components/MainButton";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { IoMdCloseCircle, IoMdImages } from "react-icons/io";
import Select from "react-select";
import TextareaField from "../../components/TextareaField";

function EditProduct() {
  const options = [
    { value: "History", label: "History" },
    { value: "Science", label: "Science" },
    { value: "Fiction", label: "Fiction" },
    { value: "Biography", label: "Biography" },
    { value: "Philosophy", label: "Philosophy" },
  ];

  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  });

  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);

  const handleSelectChange = (selectedOption) => {
    setCategory(selectedOption);
  };

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const changeImage = (img, files) => {
    if (files.length > 0) {
      console.log(img);
      console.log(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...state,
      category: category ? category.value : "",
      images,
    });

    // Reset all form fields after submission
    setState({
      name: "",
      description: "",
      discount: "",
      price: "",
      brand: "",
      stock: "",
    });
    setCategory(""); // Reset category selection
    setImages([]); // Clear image files
    setImageShow([]); // Clear preview images
  };

  useEffect(() => {
    setState({
      name: "Shoes",
      description: "This is my product",
      discount: 5,
      price: 255,
      brand: "Nike",
      stock: 100,
    });
    setCategory("History");
    setImageShow([
      "http://localhost:5173/images/admin.jpg",
      "http://localhost:5173/images/seller.png",
      "http://localhost:5173/images/demo.jpg",
    ]);
  }, []);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-slate-800 rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-xl font-semibold text-white">Edit Product</h1>
          <div>
            <Link to={"/seller/dashboard/all-product"}>
              <MainButton text="All Product" />
            </Link>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              className=" px-2"
              onChange={inputHandle}
              value={state.name}
              label="Product Name"
              placeholder="Product Name"
              name="name"
              type="text"
            />
            <Input
              className=" px-2"
              onChange={inputHandle}
              value={state.brand}
              label="Brand Name"
              placeholder="Brand Name"
              name="brand"
              type="text"
            />
            <Input
              className=" px-2"
              onChange={inputHandle}
              value={state.price}
              label="Price"
              placeholder="Price"
              name="price"
              type="number"
            />
            <Input
              className=" px-2"
              onChange={inputHandle}
              value={state.stock}
              label="Product Stock"
              placeholder="Product Stock"
              name="stock"
              type="number"
            />
            <Input
              className=" px-2"
              onChange={inputHandle}
              value={state.discount}
              label="Discount"
              placeholder="% Discount"
              name="discount"
              type="number"
            />

            <div>
              <label className="block text-white text-sm font-medium mb-3">
                Category
              </label>
              <Select
                options={options}
                onChange={handleSelectChange}
                value={category}
                placeholder={category ? category : "Select Category"}
                styles={{
                  control: (base) => ({
                    ...base,
                    paddingTop: "5px", // Adjust as needed
                    paddingBottom: "5px",
                  }),
                }}
              />
            </div>
          </div>

          <TextareaField
            onChange={inputHandle}
            value={state.description}
            label="Description"
            placeholder="Description"
            name="description"
          />

          {/* Image Section */}
          <div className="grid w-full mb-4 gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {imageShow.map((img, i) => (
              <div>
                <label htmlFor={i}>
                  <img src={img} alt="" />
                </label>
                <input
                  onChange={(e) => changeImage(img, e.target.files)}
                  type="file"
                  id={i}
                  className=" hidden"
                />
              </div>
            ))}
          </div>
          <MainButton text="Save Changes" className="w-full" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
