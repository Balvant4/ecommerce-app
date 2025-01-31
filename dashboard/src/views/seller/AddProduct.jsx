import React, { useState } from "react";
import MainButton from "../../components/MainButton";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { IoMdCloseCircle, IoMdImages } from "react-icons/io";
import Select from "react-select";
import TextareaField from "../../components/TextareaField";

function AddProduct() {
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

  const [category, setCategory] = useState(null);
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

  const imageHandle = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setImages([...images, ...files]);
      const imageUrl = files.map((file) => ({
        url: URL.createObjectURL(file),
      }));
      setImageShow([...imageShow, ...imageUrl]);
    }
  };

  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = [...imageShow];
      let tempImages = [...images];

      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };

      setImageShow(tempUrl);
      setImages(tempImages);
    }
  };

  const removeImage = (i) => {
    setImages(images.filter((_, index) => index !== i));
    setImageShow(imageShow.filter((_, index) => index !== i));
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

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-slate-800 rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-xl font-semibold text-white">Add Product</h1>
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
                placeholder="Select a category"
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
              <div className="h-[180px] relative" key={i}>
                <label htmlFor={`image-${i}`}>
                  <img
                    className="w-full h-full rounded-sm"
                    src={img.url}
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  id={`image-${i}`}
                  className="hidden"
                  onChange={(e) => changeImage(e.target.files[0], i)}
                />
                <span
                  onClick={() => removeImage(i)}
                  className="p-2 z-10 cursor-pointer bg-slate-500 hover:shadow-lg hover:shadow-slate-400/50 text-white absolute top-1 right-1 rounded-full"
                >
                  <IoMdCloseCircle />
                </span>
              </div>
            ))}
            <label
              htmlFor="images"
              className="flex flex-col items-center justify-center h-[180px] w-full cursor-pointer border border-dashed border-gray-400 hover:border-red-500 transition-colors"
            >
              <IoMdImages className="text-3xl text-white mb-2" />
              <span className="text-white">Select Image</span>
            </label>
            <input
              type="file"
              id="images"
              multiple
              className="hidden"
              onChange={imageHandle}
            />
          </div>
          <MainButton text="Add Product" className="w-full" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
