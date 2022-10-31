import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../StyleHome.css";
import logo from "../../../../assets/image/logo.png";
import filter from "../../../../assets/image/filter.png";
import cart from "../../../../assets/image/search.svg";
import Profil from "../../../../assets/image/profil.png";
import bell from "../../../../assets/image/bell.png";
import mail from "../../../../assets/image/mail.png";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalFilter from "../../../base/modal/ModalFilter";
import { useNavigate } from "react-router-dom";


const NavbarAfterLogin = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState([]);
  // let [searchParams, setSearchParams] = useSearchParams({});
  const handleSearch = () => {
    navigate({
      pathname: "/myProducts",
      search: "?search=" + search ,
    });
  };

  useEffect(() => {
    datas();
  }, []);
    
  const datas = async() => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `http://localhost:8000/users/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data.username);
  }


 return (
   <div>
     <nav className="navbar navbar-expand-md navbar-light fixed-top mb-4">
       <div className="container">
         <Link to="/home">
           <img src={logo} alt="" className="" />
         </Link>
         <button
           className="navbar-toggler"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#navbarCollapse"
           aria-controls="navbarCollapse"
           aria-expanded="false"
           aria-label="Toggle navigation"
         >
           <span className="navbar-toggler-icon"></span>
         </button>
         <div
           className="collapse navbar-collapse ms-auto navbar-besic"
           id="navbarCollapse"
         >
           {/* <ul className="navbar-nav mb-2 mb-md-0 w-50 me-auto">
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
                 <i className="bi bi-search" onClick={handleSearch}></i>
               </span>
             </div>
             <p>{searchParams.get("keyword")}</p>
             <button className="btn btn-outline-light filter">
               <img src={filter} alt="filter" />
             </button>
           </ul> */}

           <ul className="navbar-nav mb-2 mb-md-0 me-auto">
            <li>
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
                <span className="input-group-text search bg-light" id="search-addon">
                    <i className="bi bi-search" onClick={handleSearch}></i>
                </span>
              </div>
            </li>
            <li>
              <button className="btn filter1">
                <ModalFilter />
              </button>
            </li>

           </ul>
           <form className="ms-4 end">
             <Link to="/checkout">
             <img src={cart} alt="" className="icon-cart mb-2" />
             </Link>
             <img src={bell} alt="" className="icon-cart ms-3 mb-2" />
             <img src={mail} alt="" className="icon-cart ms-3 mb-2" />
             <Link to="/profile">
              <img src={Profil} alt="" className="rounded-circle" />
             </Link>
           </form>
         </div>
       </div>
     </nav>
     <nav className="footer-nav bg-light text-center fixed-bottom">
       <div className="content mt-2 mb-2">
         <button
           className="btn btn-light me-3"
           data-bs-toggle="modal"
           data-bs-target="#staticBackdrop"
         >
           <i className="bi bi-search"></i>
         </button>
         <Link to="/checkout">
           <button className="btn btn-light me-3">
             <img src={cart} alt="" className="icon-cart m-auto" />
           </button>
         </Link>
         <button className="btn btn-light me-3">
           <img src={bell} alt="" className="icon-cart  m-auto" />
         </button>
         <button className="btn btn-light me-3">
           <img src={mail} alt="" className="icon-cart m-auto" />
         </button>
         <Link to="/profile">
           <img src={Profil} alt="" className="rounded-circle" />
         </Link>
       </div>
     </nav>
   </div>
 );
};

export default NavbarAfterLogin;
