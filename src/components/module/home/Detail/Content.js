import React, { useEffect, useState , Fragment} from "react";
import "./StyleDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../../../configs/redux/actions/productsActions";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import rectangle from "../../../../assets/image/detail products/Rectangle 21.png";
import shape from "../../../../assets/image/detail products/Shape (1).png";
// import "./home_style.css";
import { FormatRupiah } from "@arismun/format-rupiah";
import { addMycart } from "../../../../configs/redux/actions/bagAction";
import { Breadcrumb } from "react-bootstrap";
import muslim1 from "../../../../asset/img/muslim-pria1.png";
import stars from "../../../../asset/img/Rating 5 stars.png";
// import muslim2 from "../../../../asset/img/muslim-pria2.png";
// import muslim3 from "../../../../asset/img/muslim-pria3.png";
// import muslim4 from "../../../../asset/img/muslim-pria4.png";
// import muslim5 from "../../../../asset/img/muslim-pria5.png";
// import muslim6 from "../../../../asset/img/muslim-pria1-mini.png";


const Content = () => {
    // const products = useSelector((state) => state.dataProduct.products);
    // const dispatch = useDispatch();

    const { id } = useParams();
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    // const fetchProducts = async () => {
    //   const response = await axios
    //     .get(`http://localhost:8000/products/${id}`)
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   dispatch(getDetail(response.data.data[0]));
    // };
    // useEffect(() => {
    //   fetchProducts();
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    useEffect(() => {
      axios
        .get(`http://localhost:8000/products/${id}`)
        .then( (response)=> {
          setProducts(response.data.data);
          console.log(products);
        })
        .catch( (error)=> {
          console.log(error);
        });
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAddBag = async (detailProductId, navigate) => {
      const data = {
        productId: detailProductId,
        qty: 1,
      };
      // dispatch()
      addMycart(data, navigate);
    };

     const [count, setCount] = useState(1);
     const handleSum = () => {
       setCount(count + 1);
     };
     const handleMin = () => {
       setCount(count - 1);
     };

     const [countSize, setCounts] = useState(1);
     const handleSums = () => {
       setCounts(countSize + 1);
     };
     const handleMins = () => {
       setCounts(countSize - 1);
     };

     
    return (
      <Fragment>
        {/* {(products.data).length === 0 ? (
          <div class="text-center">
            <FontAwesomeIcon icon={faSpinner} spin />
            &nbsp;Loading
          </div>
        ) : ( */}
        {/* {product.map((item) => ( */}
        <div className="container child-page">
        <Breadcrumb className="mt-3 mb-3">
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/category">
                    Category
                </Breadcrumb.Item>
            <Breadcrumb.Item active>T-shirt</Breadcrumb.Item>
        </Breadcrumb>
        <div className="row mt-3">
          
              <div className="col-lg-5">
              {/* <div className="col-md-4"> */}
                  <img src={muslim1} className="w-100" alt="ProductPic" />
                  {/* <img src={products.photo} className="w-100 img-fluid rounded" alt="" /> */}
              </div>
              <div className="col-lg-6  ms-2">
                <div className="title-product">
                  <h3 className="product-title">{products.product_name}</h3>
                  <p className="text-secondary sub-title mt-3">{products.store_name}</p>
                  <div className="d-flex justify-content-start text-warning start">
                    <div className="bi-star-fill">
                      <img src={stars}></img>
                    </div>
                  </div>
                </div>
                <div className="price-products">
                  <p className="mt-3 mb-2 title-price">Price</p>
                  <h3 className="price-detail">
                    <FormatRupiah value={products.price} />
                  </h3>
                </div>

                <div className="color-products mt-3 mb-2">
                  <span className="d-block mt-4 solid-text">
                    Color
                </span>
                <div className="d-flex mt-3 ">
                <div className="color-item color-item1">
                  <Link to="#">
                    <div className="black"></div>
                  </Link>
                </div>
                <div className="color-item color-item1">
                  <Link to="#">
                    <div className="red"></div>
                  </Link>
                </div>
                <div className="color-item color-item1">
                  <Link to="#">
                    <div className="blue"></div>
                  </Link>
                </div>
                <div className="color-item color-item1">
                  <Link to="#">
                    <div className="green"></div>
                  </Link>
                </div>
                </div>
                </div>

                <div className="size mt-5">
                  <div className="d-flex justify-content-start ms-1 text-black">
                    <p className="title-size">Size</p>
                    <p className="title-jumlah ms-5 text-black">Jumlah</p>
                  </div>
                  <div className="d-flex justify-content-start mt-1 ms-2 mb-2">
                    <div className="d-flex btn-min btn" onClick={handleMins}>
                    <img src={rectangle} className="m-auto icon" alt="" />
                    </div>
                    <p className="ms-2 me-2 mt-1 size">{ countSize}</p>
                    <div className="d-flex btn-max btn" onClick={handleSums}>
                    <img src={shape} className="m-auto icon" alt="" />
                    </div>
                    <div className="d-flex btn-min btn ms-5" onClick={handleMin}>
                    <img src={rectangle} className="m-auto icon" alt="" />
                    </div>
                    <p className="ms-2 me-2 mt-1 size">{count}</p>
                    <div className="d-flex btn-max btn" onClick={handleSum}>
                    <img src={shape} className="m-auto icon" alt="" />
                    </div>
                </div>

                <div className="submit mt-3 mb-2">
                    <div className="d-flex justify-content-start ms-1">
                    <div className="col-lg-3 btn-chat">
                      <Link to="/Chat" className="text-decoration-none text-black">
                      Chat
                      </Link>
                    </div>
                    <div className="col-lg-4 ms-1 btn-bag">
                        <Link to="/cart" className="text-decoration-none text-black" onClick={() => {
                          console.log(products.data.id);
                          handleAddBag(products.data.id, navigate);
                        }}>
                            Add bag
                        </Link>
                    </div>
                    <div className="col-lg-5 ms-1 btn-buy">
                        <Link to="/Checkout" className="text-decoration-none text-white">
                        Buy Now
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
            <div className="col-lg-12">
            <h2 className="title-info">Informasi Produk</h2>
            <h4 className="mt-4 text-sub">Condition</h4>
            <p className="text-danger new">{products.product_condition}</p>
            <p className="text-sub">Description</p>
            <div className="text ms-1 text-secondary">
                <p>{products.descript}</p>
            </div>
    </div>
  </div>
            
          </div>
        {/* ))} */}
      </Fragment>
    );
  };
  
  export default Content;