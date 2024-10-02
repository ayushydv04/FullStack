import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellProd = ({ addProduct }) => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const [imageType, setImageType] = useState('upload'); // State to manage image type
  const [imageFile, setImageFile] = useState(null); // State to manage uploaded file

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/products/add', data);
      console.log('Product added:', response.data);
      // adding toast when success
      toast.success("Product added successfully")
      // Reset form or show success message
      reset();
    } catch (error) {
      console.error('Error adding product:', error);
      // showing toast when error
      toast.error("Failed to add product")
    }
  };

  // Watch the value of imageType from radio buttons
  const watchImageType = watch("imageType", "upload");

  // Update local state whenever the form's imageType changes
  useEffect(() => {
    setImageType(watchImageType);
  }, [watchImageType]);

  // Manually handle file input
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-10 space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Product</h2>

      {/* Image Upload or Link */}
      <div>
        <label className="block mb-2">Image Upload or Link</label>

        <div className="flex items-center gap-4 mb-4">
          {/* Radio button to choose upload or link */}
          <label>
            <input
              type="radio"
              value="upload"
              {...register("imageType")}
              defaultChecked={imageType === 'upload'}
            /> Upload Image
          </label>
          <label>
            <input
              type="radio"
              value="link"
              {...register("imageType")}
              defaultChecked={imageType === 'link'}
            /> Use Image Link
          </label>
        </div>

        {/* Conditionally show file input or image link input */}
        {imageType === 'upload' ? (
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange} // Handle file selection manually
            className="block w-full"
            />
        ) : (
          <input
            type="text"
            {...register("imageUrl", { required: imageType === 'link' })}
            placeholder="Enter image URL"
            className="block w-full p-2 border rounded-md"
          />
        )}

        {/* Error messages for file upload or link */}
        {errors.imageFile && <span className="text-red-500">Image upload is required.</span>}
        {errors.imageUrl && <span className="text-red-500">Image URL is required.</span>}
      </div>

      {/* Name Field */}
      <div>
        <label className="block mb-2">Product Name</label>
        <input
          type="text"
          {...register("name", { required: "Product name is required" })}
          placeholder="Enter product name"
          className="block w-full p-2 border rounded-md"
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>

      {/* Description Field */}
      <div>
        <label className="block mb-2">Product Description</label>
        <textarea
          {...register("description", { required: "Product description is required" })}
          placeholder="Enter product description"
          className="block w-full p-2 border rounded-md"
          rows="4"
        />
        {errors.description && <span className="text-red-500">{errors.description.message}</span>}
      </div>

      {/* Price Field */}
      <div>
        <label className="block mb-2">Product Price</label>
        <input
          type="number"
          {...register("price", { 
            required: "Price is required", 
            min: { value: 1, message: "Price should be greater than 0" } 
          })}
          placeholder="Enter product price"
          className="block w-full p-2 border rounded-md"
        />
        {errors.price && <span className="text-red-500">{errors.price.message}</span>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-3 bg-green-500 text-white rounded-md font-bold"
      >
        Add Product
      </button>
    </form>

          {/* Toast Container */}
          <ToastContainer />

    </>
  );
};

export default SellProd;
