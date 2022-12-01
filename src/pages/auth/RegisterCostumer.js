import React, { useState }from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style2.css";
import vektor from "../../assets/image/logo.png"
import { useDispatch, useSelector } from "react-redux";
import {signUp} from "../../configs/redux/actions/userActions";

const Register = ({ label, ...props }) => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: ""
    });

        if (auth === user) {
            alert("Email is already used");
        }
        console.log(user);
      const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            role: "buyer"
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
              <img className="mb-2" src={vektor} alt="" />
              {/* <img className="mb-4 mt-4 ms-2" src={blanja} alt="" /> */}
              <h1 className="title-login mb-2">Please sign up with your account</h1>
              <div className="mb-2 mt-4">
              <button className="btn-register btn-customer-click">
                  Customer
                </button>
              <Link to="/registerSeller">
                    <button className="btn-register btn-seller" type="button">
                    Seller
                    </button>
                </Link>
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
                  className="form-control mb-3"
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
                  className="form-control mb-3 "
                  placeholder="Email Address"
                  onChange={handleChange}
                />
                <label htmlFor="floatingEmail">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  id="floatingPassword"
                  name="password"
                  type="password"
                  {...props}
                  className="form-control mt-3 "
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              
              <button className="btn final-button btn-danger" type="submit">
                Register
              </button>

              <label className="register">
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
}


// function Register() {
//     return (
        
//       );
//   }

  export default Register;