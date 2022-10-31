import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/module/home/footer/Footer";
import Navbar from "../../components/module/home/navbar/Navbar";
import "../../components/module/profile/profile.css";
import Profile from "../../components/module/profile/Profile";
import Swal from "sweetalert2";
import ModalCreate from "../../components/module/ActionProducts/CreateProducts";
import ModalEdit from "../../components/module/ActionProducts/EditProduct";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductList = () => {
    const [products, getProducts] = useState([]);
    const navigate = useNavigate();
    console.log(navigate);
    const [show, setShow] = useState(false);
    async function fetchData() {
        try {
            const token = localStorage.getItem("token");
            const createdAt = await axios.get(`${process.env.REACT_APP_BACKEND}products?limit=30`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(createdAt.data.data);
            getProducts(createdAt.data.data);
        }catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
        setShow(false)
        setShow(true)
    }, []);



    const deleteProducts = async (id) => {
        Swal.fire({
            title: "Are you sure to delete this product?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#32C33B",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios
                .delete(`${process.env.REACT_APP_BACKEND}products/${id}`)
                .then(() => {
                    Swal.fire("Deleted!", "Product delete success", "success");
                    setShow(false)
                    window.location.reload(false);
                })
                .catch(() => {
                    Swal.fire("Deleted Failed!", "failed deleted products", "error");
                    setShow(false)
                });
            }
        });
    };

    return (
        <div className="my-bag">
      <Navbar />
      <div className="row">
        <div className="col-md-3">
        <Profile>
          <ul>
            <li>
              <Link
                to="/selling"
                className="link-dark text-decoration-none text-secondary mr-4"
              >
                Selling
              </Link>
            </li>
          </ul>
        </Profile>
        </div>
        <div className="col-lg-8">
          <div className="card card-mylist">
            <div className="card-body">
              <h4 className="mb-3">My Products</h4>
             
              <div className="col-md-7 d-flex flex-row bd-highlight mb-3">
                <div className="p-3 bd-highlight text-danger">all items</div>
                <div className="p-3 bd-highlight">Sould out</div>
                <div className="p-3 bd-highlight">Archived</div>
                <hr />
              </div>
              <div className="input-group rounded nav-search w-100 mt-3">
                <input
                  type="search"
                  className="form-control search-input "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  name="search"
                />
                <span
                  className="input-group-text search bg-light"
                  id="search-addon"
                >
                  <i className="bi bi-search"></i>
                </span>
              </div>
              {/* <div className="d-flex justify-content-between">
              <ModalCreate/>
                <button
                onClick={() => navigate("/")}
                className="btn btn-secondary btn-home "
              >
                Back to home
              </button>
              </div> */}
              
              <div className="table-responsive mt-4">
                <ModalCreate />
                <table className="table mt-3">
                  <thead className="table-light">
                    <tr>
                      <th>No</th>
                      <th>Product</th>
                      <th>Merk</th>
                      <th>Price</th>
                      <th>Size</th>
                      <th>Stock</th>
                      <th>Category</th>
                      <th>Condition</th>
                      <th>Deskripsion</th>
                      {/* <th>Photo</th> */}
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.product_name}</td>
                        <td>{item.store_name}</td>
                        <td>{item.price}</td>
                        <td>{item.size}</td>
                        <td>{item.stock}</td>
                        <td>{item.category_name}</td>
                        <td>{item.product_condition}</td>
                        <td>{item.descript}</td>
                        {/* <td>
                          <img
                            src={process.env.REACT_APP_BACKEND + item.photo}
                            alt={item.photo}
                            width={50}
                            height={55}
                          />
                        </td> */}
                        <td>
                          <ModalEdit 
                            id={item.id} 
                            product_name={item.product_name} 
                            // seller_id={item.store_name} 
                            price={item.price} 
                            size={item.size} 
                            stock={item.stock} 
                            // photo={item.photo}
                            // category_id={item.category_name} 
                            product_condition={item.product_condition} 
                            descript={item.descript} 
                          >
                            <FontAwesomeIcon icon={faPen}/>
                          </ModalEdit>

                          <button
                            onClick={() => deleteProducts(item.id)}
                            className="btn btn-danger mt-1"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
}

export default ProductList;