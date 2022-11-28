import React, {useState, useEffect} from "react";
import avatar from "../../../assets/image/profil-avatar.png";
import Profile from "./Profile";
import home from "../../../assets/image/user-profil.png";
import pkage from "../../../assets/image/map-pin (3) 1.png";
import shoping from "../../../assets/image/clipboard 1 (1).png"
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../configs/redux/actions/userActions";
import "../../../pages/Products/style.css";
import "./profile.css"
import Footer from "../home/footer/Footer";

const EditProfile = () => {
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState(image);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    // const [gender, setGender] = useState("");
    const [date_of_birth, setDate_of_birth] = useState("");
    const onImageUpload = (e) => {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const data = new FormData();
    data.append("phone", phone);
    data.append("fullname", fullname);
    // data.append("gender", gender);
    data.append("email", email);
    data.append("date_of_birth", date_of_birth);
    data.append("image", image);
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_BACKEND}users/update-profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        "Content-Type": "multipart/form-data",
      })
      .then((res) => {
        console.log(res);
        dispatch(updateUser(res));
        navigate("/profile");
        Swal.fire({
          icon: "success",
          title: "Berhasil mengupdate users",
          text: `username : ${fullname}`,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "data yang anda inputkan salah",
        });
        console.log(err);
      });
  };

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

    console.log(response.data.data[0]);
    setFullname(response.data.data[0].fullname);
    setImagePreview(response.data.data[0].date_of_birth || avatar);
    setImage(response.data.data[0].date_of_birth || avatar);
    setDate_of_birth(response.data.data[0].image);
    setPhone(response.data.data[0].phone || null);
    // setGender(response.data.data[0].gender);
    setEmail(response.data.data[0].email);
  };
  // console.log(gender);

  return (
    <div className="my-bag">
      <div className="row">
        <div className="col-md-3">
          <Profile />
        </div>
        <div className="col-lg-8 ">
          <div className="card card-mylist">
            <div className="card-body mb-4">
              <h4 className="mb-3">My Profile</h4>
              <p className="">Manage your profile information</p>
              <hr />
              <div className="my-profile-wrapper">
                <section className="my-profile-form">
                  <div className="">
                    <label className="input-name m-2" htmlFor="Name">
                      Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="Name"
                      className="form-control input-form"
                      placeholder="Maudy"
                      disabled
                    />
                  </div>
                  <div className="mt-2">
                    <label className="input-name m-2" htmlFor="Email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control input-form"
                      placeholder="Maudy123@gmail.com"
                      disabled
                    />
                  </div>
                  <div className="mt-2">
                    <label className="input-name m-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control input-form"
                      placeholder="081277665544"
                      disabled
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EditProfile;