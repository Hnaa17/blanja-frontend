import React from "react";
import { useSelector } from "react-redux";
import Card from "../../../base/Card";
import "../StyleHome.css";

const ProductComponent = ({ title, subtitle }) => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
      const { id, product_name, photo, price, store_name } = product;
        return (
      <div>
        <div className="container">
          <div className="row">
            <div className="products">
              <h3 className="title">{title}</h3>
              <p>{subtitle}</p>
            </div>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
                  <div className="col" key={id}>
                    <Card
                      src={photo}
                      to={`/detail/${id}`}
                      titleName={product_name}
                      price={price}
                      store_name={store_name}
                    />
                  </div>
            </div>
          </div>
        </div>
      </div>
            
        );
    });
    return <>{renderList}</>;
  };
  
  export default ProductComponent;

