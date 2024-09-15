import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
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
  
setFormData({...formData, [e.target.id]: e.target.value})
  }
  console.log(formData);
  return <div className="container">
   <ProductForm handleChange={handleChange} /> 
  </div>;
};

export default NewProduct;
