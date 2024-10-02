import React from "react";
import Home from "./Home";
import Services from "./Services";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import ShowCard from "./ShowCard";
import Products from "./Products";
import Cart from "./Cart";

import { IoBagHandleSharp } from "react-icons/io5";

const Navbar = ({prod}) => {
  return (
    <>
    <div className="flex justify-between items-auto mt-6 mb-5 font-mono">

        <div className="ml-16 text-lg text-green-900">
            Kitaab.com
        </div>

        <div className="flex gap-16 text-lg">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/products">Products</NavLink>
        </div>

        <div className="mr-16">
            <NavLink to="/cart"><IoBagHandleSharp className="absolute" size={"1.5em"}/></NavLink>
            <div className= "text-xs font-semibold relative left-4 top-4 w-3 h-3 flex justify-center items-center rounded-full bg-green-200">
                0
            </div>
        </div>


    </div>
    <div className="w-3/5 h-[1px] bg-gray-400 mx-auto mb-16"></div>

      
      

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart prod={prod}/>} />
      </Routes>
    </>
  );
};

export default Navbar;
