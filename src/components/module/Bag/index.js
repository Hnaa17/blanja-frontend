import React, {useState, useEffect} from "react";
import "../home/StyleHome.css";
import { useSelector, useDispatch } from "react-redux";
import { FormatRupiah } from "@arismun/format-rupiah";
import Total from "../Total/Index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import muslim6 from "../../../../asset/img/muslim-pria1-mini.png";
import muslim from "../../../asset/img/muslim-pria1-mini.png"



import Rectangle from "../../../assets/image/Rectangle 605.png";
import shape from "../../../assets/image/Shape.png";
import { getCart } from "../../../configs/redux/actions/bagAction";
import Button from "../../base/Button";

const Bag = () => {
  const navigate = useNavigate();

    return (
    <div className="container bag-my">
      <h3 className="title-bag mb-4">My Bag</h3>
      <div className="row ">
        <div className="col-lg-8 pl-lg-0">
          <div className="card mb-3 select-all">
            <div className="table-responsive-sm">
              <table className="table mt-3">
                <tbody>
                  <td className="me-5">
                    <div className="check-select ms-4 mt-2">
                      <label className="customcheck ms-2">
                        <p className="select-item ms-4">
                          Select All Items{" "}
                          <span className="text-secondary">
                            (items selected)
                          </span>{" "}
                        </p>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <span className="checkmak mt-2 pl-4"></span>
                      </label>
                    </div>
                  </td>
                    <button className="btn btn-light text-danger">
                        delete
                    </button>
                  {/* <td className="delete text-right">Delete</td> */}
                </tbody>
              </table>
            </div>
          </div>
            <ul>
                <div className="card mb-3 ">
                  <div className="table-responsive-sm">
                    <table className="table mt-4">
                      <tbody>
                        <td className="align-middle">
                          <div className="check ms-3">
                            <label className="customcheck input">
                              <input
                                className="form-check-input "
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </td>
                        <td className="align-middle float-start">
                          <img
                            className="img-products"
                            src={muslim}
                            alt="product"
                          />
                        </td>
                        <td className="align-middle float-start">
                          <p className="post mb-1 mt-1">Muslim Koko Pria</p>
                          <span className="text-secondary sub-post">
                            Mari Store
                          </span>
                        </td>
                        <td className="align-middle">
                          <tr>
                            <button
                              className="btn btn-secondary min"
                            >
                              <img
                                src={Rectangle}
                                alt=""
                                className="icon-min"
                              />
                            </button>
                          </tr>
                        </td>
                        <td className="align-middle one">3</td>
                        <td className="align-middle">
                          <tr>
                            <button
                              className="btn btn-light max"
                            >
                              <img src={shape} alt="" className="icon-max" />
                            </button>
                          </tr>
                        </td>
                        <td className="align-middle price">
                          <FormatRupiah value={120000} />
                        </td>
                        <div className="btn btn-light align-middle text-danger">
                          hapus
                        </div>
                      </tbody>
                    </table>
                  </div>
                </div>
            </ul>
        </div>
        <Total
          onClick={() => {
            navigate("/checkout");
          }}
          totalPrice="Total Price"
          priceBag={<FormatRupiah value={120000} />}
        >
          {" "}
          <Link to="/Checkout">
            <Button
              className="mt-3 w-100 btn btn-checkout"
              title=" Select payment"
            ></Button>
          </Link>
        </Total>
      </div>
    </div>
    )

}

export default Bag;