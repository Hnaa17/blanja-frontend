import axios from "axios";
import React, { useState, Fragment } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import createProduct from "../../../configs/redux/actions/createProductAction";

const ModalCreate = ({children}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage]  = useState(null);
  const idSeller = localStorage.getItem("id");

  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }

    const [data, setData] = useState({
        product_name:"",
        seller_id: idSeller,
        price:"",
        size:"",
        stock:"",
        photo:"",
        category_id:"",
        product_condition:"",
        descript:"",
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createProduct(data,saveImage,setShow))
      
      Swal.fire({
        title: "Created Success",
        text: "New Products Created",
        icon: "success"
      })
      setShow(false);
      window.location.reload(false);
    };

        return (
            <Fragment>
            <button
        className="btn btn-success"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        Create
        {children}
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Product Name"
              name="product_name"
              value={data.product_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Seller id"
              name="seller_id"
              value={data.seller_id}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Price"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Size"
              name="size"
              value={data.size}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Stock"
              name="stock"
              value={data.stock}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="file"
              placeholder="photo"
              name="photo"
              onChange={handleUpload}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Category"
              name="category_id"
              value={data.category_id}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Condition"
              name="product_condition"
              value={data.product_condition}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Description"
              name="descript"
              value={data.descript}
              onChange={handleChange}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button type="submit" className="btn btn-primary">Create</button>
        </Modal.Footer>
        </form>
      </Modal>
    </Fragment>
  )
}

export default ModalCreate;