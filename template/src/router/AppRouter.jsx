import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import About from '../pages/About'
import Main from '../pages/Main'
import ProductForm from '../components/ProductForm'
import ProductCard from '../components/ProductCard'
import NotFound from '../components/NotFound'
import NewProduct from '../pages/NewProduct'


const AppRouter = () => {
  return (
  <BrowserRouter>
<Navbar/>
  <Routes>

<Route path="/About" element={<About/>}/>
<Route path="/"  element={<Main/>}/>
<Route path="/New product" element={<NewProduct/>}/>
<Route path="/Product List" element={<ProductCard/>}/>
<Route path="/UpdateProduct" element={<ProductForm/>}/>
<Route path="*" element={<NotFound/>}/>







  </Routes>
  
  
  
  </BrowserRouter>
  )
}

export default AppRouter