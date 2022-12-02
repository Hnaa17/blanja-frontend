import React, { useEffect, useState } from "react";
import "./profile.css";
import profil from "../../../assets/image/profilBig.png";
import home from "../../../assets/image/seling-product/home (2) 1.png";
// import vektor from "../../../assets/image/seling-product/Vector (2).png";
import avatar from "../../../assets/image/edit-avatar.png";
import pekage from "../../../assets/image/seling-product/package 1.png";
import shoping from "../../../assets/image/seling-product/shopping-cart (3) 1.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    datas();
  }, []);

  const datas = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND}users/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data.fullname);
  };
  console.log(user);

  return (
    
    <div className="col-lg-4 select-profil col-md-6 mt-5">
      <div className="profil-avatar">
        <table>
          <tbody>
            <td className="align-middle float-start image">
              <img
                className="rounded-circle"
                width={75}
                height={70}
                src={profil}
                alt="img"
              />
            </td>
            <td className="align-middle float-start ms-3 image-text">
              <p className="post mb-2">{user.fullname}</p>
              <p className="post mb-2">{user.email}</p>
              <p className=" edit-profil mt-2">
              <a className="text-primary text-decoration-none" href="/edit_profile">
                <img src={avatar} className="me-2 " alt="" />
                Ubah Profile</a>
              </p>
            </td>
          </tbody>
        </table>
      </div>
      <div className="profil-select">
        <ul>
          <div className="mb-1 mt-3">
            <Link className="text-primary text-decoration-none text-danger" to={"/productList"}>
              MyProducts
            </Link>
            {/* <div className="collapse show" id="dashboard-collapse">
              {children}
            </div> */}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Profile;


{/* 




      <div className="col-lg-4 mt-2 select-profil">
      <div className="profil-avatar ">
        <table>
          <tbody>
            <td className=" align-middle float-start image">
              <img
                className="rounded-circle"
                width={75}
                height={70}
                src={date_of_birth ? date_of_birth : profil}
                alt="img"
              />
            </td>
            <td className="align-middle float-start ms-3 image-text">
              <p className="post mb-2">{user.fullname}</p>
              <p className=" edit-profil mt-2">
                <img src={avatar} className="me-2" alt="" />
                ubah profile
              </p>
            </td>
          </tbody>
        </table>
      </div>


      <div className="profil-select mt-5">
        <ul className="list-unstyled ps-0 mt-2">
          <li className="mb-1">
            <button className="btn btn-acount">
              <img src={imgOne} alt="" />
            </button>
            <button
              className="btn btn-toggle title-dashboard d-inline-flex align-items-center rounded border-0 collapsed text-black"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              <span className="text-profil">{titleOne}</span>
            </button>
            <img src={vektor} className="img-down" alt="" />
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small"></ul>
            </div>
          </li>
          <li className="mb-1 mt-3">
            <button className="btn btn-location">
              <img src={imgTwo} alt="" />
            </button>
          <Link to="/productList">
              <button
              className="btn btn-toggle title-dashboard d-inline-flex align-items-center rounded border-0 collapsed text-secondary"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="true"
            >
              <span className="text-profil">{titleTwo}</span>
            </button>
          </Link>
            <img src={vektor} className="img-down ms-4" alt="" />
            <div className="collapse show" id="dashboard-collapse">
              {children}
            </div>
          </li>
          <li className="mb-1 mt-3">
            <button className="btn btn-mail">
              <img src={imgThree} alt="" />
            </button>
            <button
              className="btn btn-toggle title-dashboard d-inline-flex align-items-center  rounded border-0 collapsed text-secondary"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              <span className="text-profil">{titleThree}</span>
            </button>
            <img src={vektor} className="img-down" alt="" />
            <div className="collapse" id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small"></ul>
            </div>
          </li>
        </ul>
      </div>
    </div> */}