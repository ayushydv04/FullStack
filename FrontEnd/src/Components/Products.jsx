import React from 'react'
import BuySell from './BuySell'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Products = () => {

    const initialData = []

  const [prod, setProd] = useState(initialData);

  // Function to add a new product locally
  const addProduct = (newProduct) => {
    setProd([...prod, newProduct]);
  };

  // Fetch products from MongoDB when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const api = "http://localhost:5000/api/products/all"; // Backend API endpoint
        const response = await axios.get(api); // Fetch the products
        console.log('Fetched products:', response.data);

        // Merge the fetched data with the existing array
        setProd([...initialData, ...response.data]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means it runs only on mount

  return (
    <div>
      <BuySell prod={prod} addProduct={addProduct} />
    </div>
  )
}

export default Products
