import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './style2.css'
import vektor from '../../assets/image/logo.png'
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
    const navigate = useNavigate();

    const [formForgotPass, setFormForgotPass] = useState({
      email: "",
    });

    const handleChange = (e) => {
      setFormForgotPass({
        ...formForgotPass,
        [e.target.name]: e.target.value,
      });
    };

    const handleForgot = () => {
        navigate("/reset-pass")
        console.log(formForgotPass)
    };

 return (
   <div>
     <div className="form-signin">
       <div className="header-login">
         <img className="mb-2 mt-5" src={vektor} alt="" />
         {/* <img className="mb-4 mt-4 ms-2" src={blanja} alt="" /> */}
         <h1 className="title-login mb-3 mt-1">Reset Password</h1>
       </div>

       <form onSubmit={handleForgot}>
         <div className="form-floating mb-4">
           <input
             type="email"
             name="email"
             className="form-control"
             placeholder="Email"
             value={formForgotPass.email}
             onChange={handleChange}
           />
           <label htmlFor="floatingInput">Email</label>
         </div>

         <button className="btn final-button btn-danger" onClick={handleForgot}>
           Confirm
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

export default ForgotPass