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

const MyProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // let pageParam = searchParams.get("page") || "1";
  // let limitParam = searchParams.get("limit") || "10";

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  const getProducts = async () => {
    const searching =
      searchParams.get("search") === null ? "" : searchParams.get("search");
    axios
      .get(
        `${process.env.REACT_APP_BACKEND}products?search=${searching}&sortby=product_name&sort=${sort}&page=1&limit=30`
      )
      .then((response) => {
        console.log(response.data.data);
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSort = (e) => {
    setSort(e.currentTarget.value);
  };
  console.log(search);

  const handleSearch = (e) => {
    e.preventDefault();
    getProducts();
    setSearchParams({
      search,
      sort,
    });
  };
  console.log(search)
  console.log(sort)

  useEffect(() => {
    getProducts();
    setSearch(searchParams.get("search"));
    searchParams.get("search");
    searchParams.get("sort");
  }, [searchParams]);

  const page = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <div className="h-100">
      <Navbar sort={sort}/>
      <div className="container">
        <div className="row">
          <div className="products">
            <h3 className="title">New</h3>
            <p className="mt-5">Result Search</p>
          </div>

          {/* <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 mt-5">
        </div> */}
          <form onSubmit={handleSearch}>
          <select className="form-select form-sort mt-3" aria-label="Default select example" onChange={handleSort}>
            <option value="">Pilih Option</option>
            <option value="ASC">A-Z</option>
            <option value="DESC">Z-A</option>
          </select>
            <button type="submit" className='btn btn-danger mt-3'>Sort</button>
          </form>

          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3 mb-5">
            {products.length > 0 ? (
              products.map((item) => [

                <div key={item.id}>
                  <div className="card shadow-sm">
            <Link to={`../detail/${item.id}`} className="name-card" key={item.id}>
                <img src={suits} className="img-fluid img" alt="cloth" />
                <div className="card-body">
                    <h5 className="card-title name-card">
                        <span className="name-card">{item.product_name}</span>
                    </h5>
                    <p className="price text-danger">
                      <FormatRupiah value={item.price} />
                    </p>
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
                </div>
              ])
            ) : (
              <div className=" text-center m-auto mt-5">
                <h2>Product Not Found </h2>
                <Footer />
              </div>
            )}
          </div>
          <Pagination
            limit={limit}
            totalData={products.length}
            page={page}
          />
        </div>
      </div>
    </div>
  );
}

export default MyProducts;
