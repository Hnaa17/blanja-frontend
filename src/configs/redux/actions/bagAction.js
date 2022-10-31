import axios from "axios"

export const getCart = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    dispatch({type: "GET_MYCART_PENDING"})

    const myCart = await axios.get(

      `${process.env.REACT_APP_BACKEND}transactions`,

      {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

    );

    const cart = myCart.data.data
    
    dispatch({type: "GET_MYCART_SUCCESS", payload: {cart}})
  } catch (error) {
    console.log(error);
  }
}

export const addMycart = async (data, navigate) => {
  try {

    const token = localStorage.getItem('token')
   
    await axios.post(`${process.env.REACT_APP_BACKEND}transactions`, data, {
      "content-type": "multipart/form-data",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    navigate("/Bag");

  } catch (error) {
    console.log(error);
  }
}