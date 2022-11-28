import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../configs/redux/actions/userActions";

import cart from "../../../assets/image/search.svg";
import Profil from "../../../assets/image/profil.png";
import bell from "../../../assets/image/bell.png";
import mail from "../../../assets/image/mail.png";
import { Dropdown, DropdownButton, Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import "./style.css";
import "../../module/home/StyleHome.css";
import filter from "../../../asset/img/filter.png";
import kaca from "../../../asset/img/search.png";

const NavbarBase = ({ onChange, onClick, src, srcCart }) => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const data  = useSelector((state) => state.bag);
    console.log(user);
    const handleSignOut = () => {
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch(signOut());
            Swal.fire({
                icon: "success",
                title: `Good Bye!!`,
            });
    };

    const [search, setSearch] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [sort, setSort] = useState("");
    const [products, setProducts] = useState([]);

    function getData() {
      axios
      .get(`${process.env.REACT_APP_BACKEND}products?search=${search}&sortby=product_name&sort=${sort}&page=1&limit=10`)
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
            search: "?search=" + search,
        });
    };

    useEffect(() => {
        getData();
    }, []);
    
    const datas = async () => {
    const token = localStorage.getItem("token");
    const response = await axios
    .get(`${process.env.REACT_APP_BACKEND}users/profile`,
      {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data.fullname);
    };

    return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top mb-4 nav">
        <div className="container">
        <Link to="/home">
            <img src={src} alt="" className="logo" />
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ms-auto " id="navbarSupportedContent">
          <ul className="navbar-nav w-50 me-auto">
             <form onSubmit={handleSearch}>
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
                <Link to={'/myProducts'}>
                  <img src={kaca}></img>
                </Link>
                <i className="bi bi-search" onClick={handleSearch}></i>
              </span>
              
              <button className="btn btn-outline-white mini-btn" type="button">
                <img className="ml-4" src={filter}></img>
              </button>

            </div>
              </div>
             </form>
          </ul>
            
        {/* <Search /> */}

{/* <div className="collapse navbar-collapse ms-auto " id="navbarCollapse">
          <ul className="navbar-nav mb-2 mb-md-0 w-50 me-auto">
            <div className="input-group rounded nav-search">
              <input
                type="text"
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
                <i className="bi bi-search" onClick={handleSearch}></i>
              </span>
            </div>
            <button className="btn filter">
                <ModalFilter />
            </button>
          </ul> */}

          {user?.id ? (
            <>
              <form className="ms-4">
                <Link to="/cart">
                  <button
                    className="btn btn-link position-relative mb-1"
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  >
                    <img src={cart} alt="" className="icon-cart mb-2" />
                    {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {data.cart.length}
                    </span> */}
                  </button>
                </Link>
                <img src={bell} alt="" className="icon-cart ms-3 mb-2" />
                <img src={mail} alt="" className="icon-cart ms-3 mb-2" />
              </form>

              <DropdownButton
                align="end"
                title={
                  <img
                    src={Profil}
                    alt=""
                    width={35}
                    height={35}
                    className="rounded-circle"
                  />
                }
                variant="link"
                id="dropdown-menu-align-end"
              >
                <Dropdown.Item variant="link">
                  {" "}
                  <p className="text-center m-auto">{user.fullname} </p>
                  {/* <p> Hallo : {user.fullname} </p> */}
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item variant="secondary" eventKey="4">
                    {" "}
                    <Link to="/profile">Profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4" variant="danger">
                    <Link to="/home" onClick={() => handleSignOut()}>
                      Logout
                    </Link>
                  </Dropdown.Item>
                </DropdownButton>
              </>
              ) : (
              <>
                  
                <Link to="/login">
                  <button className="btn btn-danger button-login " type="button">
                    {" "}
                    login
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    type="button"
                    className="btn btn-outline-secondary button-signup 3 mb-2"
                  >
                    {" "}
                    sign up
                  </button>
                </Link>
              </>
            )}
          </div>
      </div>
    </nav>
  );
};

export default NavbarBase;