import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "./style2.css";
import vektor from "../../assets/image/logo.png";
// import blanja from "../../assets/image/Blanja.png";
// import Style from '../auth/style.module.css'
// import PropTypes from "prop-types";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../configs/redux/actions/userActions";

const RegisterSeller = ({ label, ...props }) => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        phone: "",
        storename: "",
        password: "",
        role: "seller",
    });

        if (auth === user) {
            alert("Email is alredy used");
        }
        console.log(user);
    const handleChange = (e) => {
        setUser({
        ...user,
        [e.target.name]: e.target.value,
        role : "seller"
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(signUp(user, navigate));
    };

    if (auth.id) return navigate("/login");

    return (
      <div>
        <div className="form-signin">
            <div className="header-login">
            <img className="mb-1" src={vektor} alt="" />
            {/* <img className="mb-4 mt-4 ms-2" src={blanja} alt="" /> */}
            <h1 className="title-login mb-1">Please sign up with your account</h1>
            <div className="mb-1 mt-2" id="ex1" role="tablist">
                <Link to={"/register"}>
                    <button className="btn-register btn-customer">
                    Customer
                    </button>
                </Link>
                <button className="btn-register btn-seller-click">
                Seller
                </button>
            </div>
            </div>

            <form onSubmit={handleLogin}>
              <div className="form-floating">
                <input
                  id="floatingInput"
                  name="fullname"
                  type="text"
                  {...props}
                  value={user.fullname}
                  onChange={handleChange}
                  placeholder="Name"
                  className="form-control mb-1"
                />
                <label htmlFor="floatingInput">Name</label>
              </div>

              <div className="form-floating">
                <input
                  id="floatingEmail"
                  name="email"
                  type="email"
                  {...props}
                  value={user.email}
                  className="form-control mb-1"
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                <label htmlFor="floatingInput">Email Address</label>
              </div>

              <div className="form-floating">
                <input
                  id="floatingNumber"
                  name="phone"
                  type="number"
                  {...props}
                  value={user.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="form-control mb-1"
                />
                <label htmlFor="floatingInput">Phone Number</label>
              </div>

              <div className="form-floating">
                <input
                  id="floatingInput"
                  name="storename"
                  type="text"
                  {...props}
                  value={user.storename}
                  onChange={handleChange}
                  placeholder="Store"
                  className="form-control"
                />
                <label htmlFor="floatingInput">Store</label>
              </div>

              <div className="form-floating">
                <input
                  id="floatingPassword"
                  name="password"
                  type="password"
                  {...props}
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="form-control mt-1"
                />
                <label htmlFor="floatingInput">Password</label>
              </div>

            <button className="btn final-button btn-danger" type="submit">
                Register
            </button>
            <label className="register" for="">
              <span className="texthana">
              Already have a Blanja account?
              </span>
                <Link to="/login" className="page-register">
                Login
                </Link>
            </label>
            </form>
        </div>
        </div>
    );
};
export default RegisterSeller;
