import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../StyleHome.css";
import NavbarBase from "../../../base/NavbarBase/index";
import logo from "../../../../assets/image/logo.png";
// import filter from "../../../../assets/image/filter.png";
import cart from "../../../../assets/image/search.svg";
import Profil from "../../../../assets/image/profil.png";
import bell from "../../../../assets/image/bell.png";
import mail from "../../../../assets/image/mail.png";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import { signOut } from "../../../../configs/redux/actions/userActions";

const Navbar = ({ onChange }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(user);

useEffect(() => {
  datas();
}, []);

const datas = async () => {
  const token = localStorage.getItem("token");
  const response = await axios
  .get("http://localhost:8000/users/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response.data.data.fullname);
};

  return (
    <div>
      <NavbarBase
        src={logo}
        // srcFilter={filter}
        srcCart={cart}
        onChange={onChange}
      ></NavbarBase>
    </div>
  );
};

export default Navbar;