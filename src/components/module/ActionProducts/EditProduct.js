import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import updateProduct from "../../../configs/redux/actions/updateProductAction";
// import jwt_decode from "jwt-decode";

const ModalEdit = ({
  children,
  id,
  product_name,
//   seller_id,
  price,
  size,
  stock,
//   photo,
//   category_id,
  product_condition,
  descript,
}) => {
    const dispatch = useDispatch();
    // const token = localStorage.getItem("token");
    // const decoded = jwt_decode(token);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [saveImage, setSaveImage]  = useState(photo);

    // function handleUpload(e) {
    //     console.log(e.target.files[0]);
    //     const uploader = e.target.files[0];
    //     setSaveImage(uploader);
    // }

  const [data, setData] = useState({
    product_name,
    // seller_id,
    price,
    size,
    stock,
    // photo,
    // category_id,
    product_condition,
    descript,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(data, id, setShow))
  };


  return (
    <Fragment>
     <button 
        className="btn btn-dark text-light"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
    >
        {children}
    </button>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body>
            <input
                className="form-control mt-3"
                type="text"
                placeholder="Product Name"
                id={id}
                name="product_name"
                value={data.product_name}
                onChange={handleChange}
            />
            {/* <input
                className="form-control mt-3"
                type="text"
                placeholder="Seller"
                id={id}
                name="seller_id"
                value={data.seller_id}
                onChange={handleChange}
            /> */}
            <input
                className="form-control mt-3"
                type="text"
                placeholder="Price"
                id={id}
                name="price"
                value={data.price}
                onChange={handleChange}
            />
            <input
                className="form-control mt-3"
                type="text"
                placeholder="Size"
                id={id}
                name="size"
                value={data.size}
                onChange={handleChange}
            />
            <input
                className="form-control mt-3"
                type="text"
                placeholder="Stock"
                id={id}
                name="stock"
                value={data.stock}
                onChange={handleChange}
            />
            {/* <input
                className="form-control mt-3"
                type="file"
                placeholder="photo"
                id={id}
                name="photo"
                onChange={handleUpload}
            /> */}
            {/* <input
                className="form-control mt-3"
                type="text"
                placeholder="Category"
                id={id}
                name="category_id"
                value={data.category_id}
                onChange={handleChange}
            /> */}
            <input
                className="form-control mt-3"
                type="text"
                placeholder="Condition"
                id={id}
                name="product_condition"
                value={data.product_condition}
                onChange={handleChange}
            />
            <input
                className="form-control mt-3"
                type="text"
                placeholder="Description"
                id={id}
                name="descript"
                value={data.descript}
                onChange={handleChange}
            />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <button type="submit" id="button-addon2" className="btn btn-primary">
            Update
            </button>
        </Modal.Footer>
        </form>
    </Modal>
 </Fragment>
)};

export default ModalEdit;