import axios from "axios";
import Swal from "sweetalert2";
import { ActionTypes } from "../constants/action-types";

const createProduct = (data, saveImage, setShow) => async(dispatch) => {
    try {
        const formData = new FormData();
        formData.append('product_name', data.product_name)
        formData.append('seller_id', data.seller_id)
        formData.append('price', data.price)
        formData.append('size', data.size)
        formData.append('stock', data.stock)
        formData.append('photo', saveImage);
        formData.append('category_id', data.category_id)
        formData.append('product_condition', data.product_condition)
        formData.append('descript', data.descript)
        const products = await axios.post(`${process.env.REACT_APP_BACKEND}products`, formData ,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(products);
        Swal.fire({
          icon: "success",
          text: (products.data.message),
        });
        setShow(false);
        const result = products.data.data;
        dispatch({ type: ActionTypes.CREATE_PRODUCTS, payload: result });
      } catch (err) {
        console.error(err.message);
        dispatch({type: ActionTypes.GET_PRODUCT_ERROR, payload: err.response})
        Swal.fire({
          icon: "error",
          text: (err.data.message),
        });
        setShow(false);
      }
}

export default createProduct;