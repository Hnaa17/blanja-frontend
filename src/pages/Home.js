import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/module/home/navbar/Navbar";
import Category from "../components/module/home/Category/Category";
import Populer from "../components/module/home/Popular/Popular";
import Footer from "../components/module/home/footer/Footer";

import Card from "../components/base/Card/index";
import { getHomeProductNew } from "../configs/redux/Slice/HomeProductSlice";
import { useDispatch, useSelector } from "react-redux";

import CarouselFadeExample from "../components/module/home/Carousel/Carousel";

import "./style.css"

const Home = () => {
    return (
      <div>
        <Navbar />
        <CarouselFadeExample />
        <Category />
        <div className="container mb-5">
          <div className="row">
            <div className="products">
              <h3>New</h3>
              <p>You've never seen before</p>

            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3 ">
              
              {/* {products.map((item) => (
                <div className="col" key={item.id}> */}
                  <Card
                    // src={item.photo}
                    // to={`/detail/${item.id}`}
                    // titleName={item.product_name}
                    // store_name={item.store_name}
                  />
                {/* </div>
              ))} */}
              </div>
            </div>
          </div>
        </div>
        <Populer />
        <Footer />
      </div>
    );
  };
  
  export default Home;
