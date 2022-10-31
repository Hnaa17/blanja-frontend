import axios from "axios";
import Swal from "sweetalert2";
import { ActionTypes } from "../constants/action-types";

const updateProduct = (data, id, setShow) => async (dispatch) => {
    try {
        const formData = new FormData();
            formData.append('product_name', data.product_name);
            // formData.append('seller_id', data.seller_id);
            formData.append('price', data.price);
            formData.append('size', data.size);
            formData.append('stock', data.stock);
            // formData.append('photo', saveImage);
            // formData.append('category_id', data.category_id);
            formData.append('product_condition', data.product_condition);
            formData.append('descript', data.descript);
        const products = await axios.put(`${process.env.REACT_APP_BACKEND}products/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        console.log(products);
        Swal.fire({
          icon: "success",
          text: (products.data.message),
          title: "Success!",
        })
        setShow(false);
    const result = products.data.data;
    window.location.reload(false)
    dispatch({ type: ActionTypes.UPDATE_PRODUCTS, payload: result });
    
    } catch(error) {
        console.error(error.message);
    Swal.fire({
      icon: "error",
      text: (error.data.message),
    });
    setShow(false);
    }
}

export default updateProduct;