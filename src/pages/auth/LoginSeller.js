import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './style2.css'
import vektor from '../../assets/image/logo.png'
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../configs/redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const LoginSeller = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.auth);
    const [formLogin, setFormLogin] = useState({
      email: "",
      password: "",
      role: "seller",
    });

    const handleChange = (e) => {
      setFormLogin({
        ...formLogin,
        [e.target.name]: e.target.value,
        role: "seller"
      });
 };
 console.log(formLogin.email)
    const handleLogin = (e) => {
      e.preventDefault();
      dispatch(loginUser(formLogin, navigate));
    };

 return (
   <div>
     <div className="form-signin">
       <div className="header-login">
         <img className="mb-2" src={vektor} alt="" />
         {/* <img className="mt-4 ms-2" src={blanja} alt="" /> */}
         <h1 className="title-login mb-1">Please login with your account</h1>
         <div className="mb-2 mt-4">
            <Link to={"/login"}>
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
             type="email"
             name="email"
             className="form-control"
             placeholder="email"
             value={formLogin.email}
             onChange={handleChange}
           />
           <label htmlFor="floatingInput">Email</label>
         </div>

         <div className="form-floating">
           <input
             type="password"
             name="password"
             className="form-control mt-3"
             placeholder="Password"
             value={formLogin.password}
             onChange={handleChange}
           />
           <label htmlFor="floatingPassword">Password</label>
         </div>

         <div className="forgot-password mt-3">
            <Link className="page-register" to="/forgot_pass">
              Forgot password?
            </Link>
         </div>

         <button className="btn final-button btn-danger">
           {isLoading ? "loading.." : "Login"}
         </button>

         <label className="register">
          <span className="texthana">Don't have a Blanja account?</span>
           <Link className="page-register" to="/register">
             Register
           </Link>
         </label>
       </form>
     </div>
   </div>
 );
}

export default LoginSeller;