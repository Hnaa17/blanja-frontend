import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "../../pages/auth/RegisterCostumer";
import RegisterSeller from "../../pages/auth/RegisterSeller";
import Login from "../../pages/auth/Login";
import LoginSeller from "../../pages/auth/LoginSeller";
import Home from "../../pages/Home";
import DetailProduct from "../../pages/DetailProduct";
import ProductList from "../../pages/Products/ProductList";
import MyProducts from "../../pages/MyProducts";
import RequireAuth from "../../components/base/RequireAuth";
import AfterLogin from "../../components/base/AfterLogin";
import Profile from "../../pages/Profile";
import ForgotPass from "../../pages/auth/ForgotPass";
import Cart from "../../pages/Cart";

// import Category from "../../pages/Category";
import Checkout from "../../pages/Checkout";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const Role = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    console.log(user)
   if (user.role !== "seller") {
     Swal.fire("You are not a seller!");
     return <Navigate to="/profile" replace />;
   }
   return children;
 };

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" replace="true" />} />
                <Route path="/home" element={<Home />} />

                <Route path="/register" element={
                    <AfterLogin>
                        <Register />
                    </AfterLogin>
                } />

                <Route path="/registerSeller" element={
                    <AfterLogin>
                        <RegisterSeller />
                    </AfterLogin>
                } />

                <Route path="/login" element={
                    <AfterLogin>
                        <Login />
                    </AfterLogin>
                } />

                <Route path="/loginSeller" element={
                    <AfterLogin>
                        <LoginSeller />
                    </AfterLogin>
                } />

                <Route path="/forgot_pass" element={
                    <AfterLogin>
                        <ForgotPass />
                    </AfterLogin>
                } />

                <Route path="/detail/:id" element={
                    <RequireAuth>
                        <DetailProduct />
                    </RequireAuth>
                } />

                <Route path="/myProducts" element={<MyProducts />} />

                <Route 
                    path="/productList" 
                    element={
                        <RequireAuth> 
                            <Role>
                                <ProductList />
                            </Role>
                        </RequireAuth>
                    } 
                />

                <Route 
                    path="/cart" 
                    element={
                        <RequireAuth> 
                            <Cart />
                        </RequireAuth>
                    } 
                />

                                
                <Route 
                    path="/Checkout" 
                    element={
                        <RequireAuth>
                            <Checkout />
                        </RequireAuth>
                    } 
                />

                
                <Route 
                    path="/profile" 
                    element={
                        <RequireAuth> 
                            <Profile />
                        </RequireAuth>
                    } 
                />

            </Routes>
        </BrowserRouter>
    );
}

export default Router;