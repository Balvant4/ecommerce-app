import React from "react";
import MainButton from "../../components/MainButton";
import Input from "../../components/Input";
import SelectField from "../../components/SelectField";
import TextareaField from "../../components/TextareaField";

function AddProduct() {
  // Example dynamic category data (could come from backend in the future)
  const books = [
    { id: 1, category: "History" },
    { id: 2, category: "Science" },
    { id: 3, category: "Fiction" },
    { id: 4, category: "Biography" },
    { id: 5, category: "Philosophy" },
  ];

  return (
    <div className="px-6 py-8 sm:px-10 lg:px-12">
      <div className="p-6 rounded-lg bg-chartbgcolor shadow-md">
        {/* Header section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-white">Add Product</h1>
          <MainButton text="All Products" className="w-40" />
        </div>

        {/* Form section */}
        <form className="space-y-8">
          {/* Input grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              className="border border-gray-700 rounded-lg bg-gray-900 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="productname"
              type="text"
              placeholder="Product Name"
              label="Product Name"
            />
            <Input
              className="border border-gray-700 rounded-lg bg-gray-900 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="brandname"
              type="text"
              placeholder="Brand Name"
              label="Brand Name"
            />
            <SelectField
              label="Category"
              name="category"
              className="border border-gray-700 rounded-lg bg-gray-900 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a category</option>
              {books.map((book) => (
                <option key={book.id} value={book.category}>
                  {book.category}
                </option>
              ))}
            </SelectField>
            <Input
              className="border border-gray-700 rounded-lg bg-gray-900 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="productstock"
              type="number"
              placeholder="Product Stock"
              label="Product Stock"
            />
            <Input
              className="border border-gray-700 rounded-lg bg-gray-900 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="price"
              type="number"
              placeholder="Price"
              label="Price"
            />
            <Input
              className="border border-gray-700 rounded-lg bg-gray-900 text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="discount"
              type="number"
              placeholder="% Discount"
              label="Discount"
            />
          </div>

          {/* Description field */}
          <TextareaField
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
