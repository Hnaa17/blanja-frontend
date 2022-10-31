import React from "react";
import Content from "../components/module/home/Detail/Content";
import InformationProduct from "../components/module/home/Detail/InformationProduct";
import Navbar from "../components/module/home/navbar/Navbar";
import Footer from "../components/module/home/footer/Footer";
import Product from "../components/module/home/newProduct/Product";

const DetailProduct = () => {
    return (
      <div>
        <Navbar />
        <Content />
        <InformationProduct/>
        <Product/>
        <Footer/>
      </div>
    );
  }
  
  export default DetailProduct

