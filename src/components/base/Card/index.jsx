import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { setProducts } from "../../../configs/redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css"
import suits from "../../../asset/img/formal-suits.png"
import star from "../../../asset/img/Rating 5 stars.png"
import { FormatRupiah } from "@arismun/format-rupiah";



// const Card = ({src, to, product_name, price, store_name}) => {
const Card = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const response = await axios
          .get(`http://localhost:8000/products`)
          .catch((err) => {
            console.log(err);
          });
        dispatch(setProducts(response.data.data));
      };
      useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    // useEffect(() => {
    //   axios
    //     .get(`http://localhost:8000/products`)
    //     .then( (response) => {
    //       setProducts(response.data.data);
    //     })
    //     .catch( (error)=> {
    //       console.log(error);
    //     });
    // }, []);
    return (
    <Fragment>
        {/* {valueDispatch.valueDispatch.map((item) => ( */}
        {products.map((item) => (
        <div className="card shadow-sm">
            {/* <div className="card w-100 card-body m-2 flex-colum"> */}
            <Link to={`../detail/${item.id}`} className="name-card" key={item.id}>
                <img src={suits} className="img-fluid img" alt="cloth" />
                {/* <img src={src} className="img-fluid img" alt="products" /> */}
                <div className="card-body">
                    <h5 className="card-title name-card">
                        <span className="name-card">{item.product_name}</span>
                    </h5>
                    <p className="price text-danger">
                      <FormatRupiah value={item.price} />
                    </p>
                    {/* <p className="category-text card-text merk">Zalora Cloth</p> */}
                    <p className="card-text merk">{item.store_name}</p>
                    <div className="d-flex justify-content-start text-warning start">
                        <div className="bi-star-fill">
                            <img src={star}></img>
                        </div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                    </div>
                </div>
            </Link>
        </div>
        ))} 
    </Fragment>
        
    );
}

export default Card;