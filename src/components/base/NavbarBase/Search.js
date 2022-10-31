import React, { useState, useEffect, Fragment } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import filter from "../../../asset/img/filter.png";
import kaca from "../../../asset/img/search.png";

const Search = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [sort, setSort] = useState("");
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);

    const handleSort = (e) => {
        setSort(e.currentTarget.value);
    };

    // const handleSearch = () => {
    //   // setSearchParams({ search: search });
    //       navigate({
    //           pathname: "/myProducts",
    //           search: "?search=" + search + "&sort=" + searchParams.get("sort"),
    //       });
    //   };

    function getData() {
        axios
        .get(`http://localhost:8000/products?search=${search}&sortby=product_name&sort=${sort}&page=1&limit=10`)
        .then((response) => {
            setProducts(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleSearch = (e) => {
        e.preventDefault();
        getData();
        navigate({
          pathname: "/myProducts",
          search: `?search=${search}&sortby=product_name&sort=${searchParams.get("sort")}&page=1&limit=10`
        });
        if (search !== "" && sort !== "") {
            setSearchParams({
                keyword: search,
                sort: sort,
            });
        }else if(search !== "") {
            setSearchParams({
                keyword: search,
            });
        }else if(sort !== "") {
            setSearchParams({
                sort: sort,
            });
        }else{
            setSearchParams({});
        }
    };

    useEffect(() => {
        getData()
    }, [])

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/products?search=${searchParams}`)
    //     .then((res) => {
    //         setSearch(res.data)
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    //     console.log(searchParams.get("search"));
    //     console.log((e) => setSearch(e.target.value))
    // }, [searchParams]);
    return (
        <Fragment>
      <section>
        <div className="container mt-2 ">
          <div className="row-new">
            <div className="row">
              {/* <div className="col-md-12 justify-content-center">
                <div className="row">
                  <h1 className="fw-bold">New</h1>
                  <p className="fs-6 text-muted">You've never seen it before!</p>
                </div>
              </div> */}
 
              <form onSubmit={handleSearch}>
                {/* <select onChange={handleSort}>
                  <option value="">Pilih Option</option>
                  <option value="ASC">A-Z</option>
                  <option value="DESC">Z-A</option>
                </select> */}

                <ul className="navbar-nav mb-2 mb-lg-0 mb-md-0 w-50 me-auto">
                <div className="d-flex search-navbar" role="search">
                <div className="input-group rounded nav-search">
                <input
                    type="search"
                    className="form-control search-input"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                    />
                    <span
                    className="input-group-text search bg-light"
                    id="search-addon"
                    >
                      <img src={kaca}></img>
                    <i className="bi bi-search" onClick={handleSearch}></i>
                    </span>
                </div>

                <button className="btn btn-outline-white mini-btn" type="button">
                <img className="mr-4" src={filter}></img>
                </button>
                </div>
                </ul>
                {/* <input type="text" name="search" placeholder="search" onChange={(e) => setSearch(e.target.value)} />
                <button type='submit' >cari</button> */}
              </form>
              {/* <p>{searchParams}</p> */}
 
              <div className="col-12 my-3">
                <div className="row d-flex">
                  {products.map((item, index) => (
                    <Link className="col-xl-2 col-lg-3 col-md-4 col-sm-6 my-2 link-product " to={`../products/${item.id}`} key={item.id}>
                      <Card className="container border rounded ">
                        <div key={item.id}>
                          <div className="d-flex justify-content-center out-img-product">
                            <img className="img-product" crossOrigin="anonymous" src={item.photo} alt="" />{" "}
                          </div>
                          <h6 className="text-dark fw-bold title-product ">{item.product_name}</h6>
                          <h6 className="text-danger">$ {item.price}</h6>
                          <p className="fs-6 text-muted">
                            <small>{item.store_name}</small>
                          </p>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
    );
}

export default Search;

















