import React, { useEffect } from "react";
import "../StyleHome.css";
import axios from "axios";
import Card from "../../../base/Card";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../../configs/redux/actions/productsActions";
import { FormatRupiah } from "@arismun/format-rupiah";

const Product = () => {
    // const products = useSelector((state) => state.allProducts.products);
    // const dispatch = useDispatch();
  
    // const fetchProducts = async () => {
    //   const response = await axios
    //     .get(`http://localhost:8000/products`)
    //     // .then((response) => {
    //     //   setProducts(response.data.data)
    //     // })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   dispatch(setProducts(response.data.data));
    // };
    // useEffect(() => {
    //   fetchProducts();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
      <div>
        <div className="container mb-5">
          <div className="row">
            <div className="products">
              <h3 className="title">You can also like this</h3>
              <p>You’ve never seen it before!</p>
            </div>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
              {/* {products.map((item) => (
                <div className="col" key={item.id}> */}
                {/* <div className="col"> */}
                  <Card
                    // src={item.photo}
                    // to={`/detail/${item.id}`}
                    // titleName={item.product_name}
                    // price={<FormatRupiah value={item.price} />}
                    // store_name={item.store_name}
                  />
                {/* </div> */}
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Product;