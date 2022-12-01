import axios from "axios";
import Swal from "sweetalert2";
import { ActionTypes } from "../constants/action-types";

export const loginUser = (dataForm, navigate) => async (dispatch) => {
    try {
        dispatch({type: 'USER_LOGIN_PENDING'})
        const result = await axios.post(
            `${process.env.REACT_APP_BACKEND}users/login`,
            dataForm
        );
       const user = result.data.data
       const role = result.data.data.role
       const users = {
        role: result.data.data.role,
        email : result.data.data.email
       }
       console.log(users);
       const id = result.data.data.id
       const token = result.data.data.token
        localStorage.setItem("token", token);
        localStorage.setItem("user", role);
        localStorage.setItem("id", id);
        localStorage.setItem("refreshToken", user.refreshToken);
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: user})

        dispatch({
            type: "USER_LOGIN_SUCCESS",
            token: token,
            payload: user,
        });
        Swal.fire({
            icon: "success",
            title: "Selamat kamu berhasil Login",
            text: `Hallo !!`,
        });
         navigate('/home')

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Data yang kamu inputkan salah",
        });
            console.log(error);
    }
};

export const signUp = (dataForm, navigate) => async(dispatch) => {
    try {
        dispatch({type: "USER_REGISTER_PENDING"});
        const result = await axios
        .post(
            `${process.env.REACT_APP_BACKEND}users/register`,
            dataForm
        );
        const user = result.data.data;

        localStorage.setItem("token", user.token);
        localStorage.setItem("id", user.id);
        localStorage.setItem("refreshToken", user.refreshToken);
        dispatch({type: "USER_REGISTER_SUCCESS", payload: user});
          Swal.fire({
            icon: "success",
            title: "Selamat kamu berhasil Register",
            text: `Silakan Login!!`,
          });
          navigate("/login");
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Data yang kamu inputkan salah",
        });
        console.log(error);
    }
};

export const signUpSeller = (dataForm, navigate) => async(dispatch) => {
    try {
        dispatch({type: "USER_REGISTER_PENDING"});
        const result = await axios
        .post(
            `${process.env.REACT_APP_BACKEND}users/registerSeller`,
            dataForm
        );
        const user = result.data.data;

        localStorage.setItem("token", user.token);
        localStorage.setItem("id", user.id);
        localStorage.setItem("refreshToken", user.refreshToken);
        dispatch({type: "USER_REGISTER_SUCCESS", payload: user});
          Swal.fire({
            icon: "success",
            title: "Selamat kamu berhasil Register",
            text: `Silakan Login!!`,
          });
          navigate("/login");
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Data yang kamu inputkan salah",
        });
        console.log(error);
    }
};

export const signOut = () => {
    return (dispatch) => {
        dispatch({
            type: "CLEAR_PRODUCT",
        });

        dispatch({
            type: "SIGN_OUT",
        });
    };
};

export const updateUser = (users) => {
    return {
      type: ActionTypes.UPDATE_USER,
      payload: users,
    };
  };

  export const updateSeller = (seller) => {
    return {
      type: ActionTypes.UPDATE_USER,
      payload: seller,
    };
  };
  
  export const loadUser = () => {
    return (dispatch, getState) => {
      const token = getState().auth.token;
      if (token) {
        dispatch({
          type: "USER_LOADED",
          token,
        });
      } else return null;
    };
  };