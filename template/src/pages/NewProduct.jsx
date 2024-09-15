import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios"
const initialState={
  name:"",
  image:"",
  price:"",
  dampingRate:0.8,
  amount:0

}
const NewProduct = () => {
  const [formData, setFormData] = useState(initialState)
  const handleChange=(e)=>{
  console.log(e.target.value);
setFormData({...formData, [e.target.id]: e.target.value})
  }
  console.log(formData);

  const handleSubmit=async (e)=>{
    e.prevent.default();
    await axios.post(
     "https://63f4e5583f99f5855db9e941.mockapi.io/products"

,formData
    )
    setFormData(initialState)
  }
  return <div className="container">
   <ProductForm handleChange={handleChange} handleSubmit={handleSubmit}/> 
  </div>;
};

export default NewProduct;
