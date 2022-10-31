import React, {Fragment, useEffect, useState} from "react";
import Footer from "../components/module/home/footer/Footer";
import Navbar from "../components/module/home/navbar/Navbar";
import star from "../asset/img/Rating 5 stars.png"
import suits from "../asset/img/formal-suits.png"
import { FormatRupiah } from "@arismun/format-rupiah";
import { useDispatch, useSelector } from "react-redux";
import { setDataProduct, setProducts } from "../configs/redux/actions/productsActions";
import { Dropdown } from "react-bootstrap";
import Pagination from "../components/module/pagination";

import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import "../pages/Page404/page.css";
import { Link } from "react-router-dom";
import Bag from "../components/module/Bag";

const Cart = () => {

  return (
    <div className="h-100">
      <Navbar />
      <Bag />
    </div>
  );
}

export default Cart;
