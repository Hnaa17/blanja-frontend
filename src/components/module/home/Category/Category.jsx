import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../home_style.css'
import hiclipart1 from "../../../../asset/img/category1.png";
import hiclipart2 from "../../../../asset/img/category2.png";
import hiclipart3 from "../../../../asset/img/category3.png";
import hiclipart4 from "../../../../asset/img/category4.png";
import hiclipart5 from "../../../../asset/img/category5.png";
import '../StyleHome.css'
import { getCategory } from "../../../../configs/redux/actions/categoryAction";

const Category = () => {
    const {category} = useSelector((state) => state.getCategory);
    console.log(category);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory());
    }, []);

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
            <h2>Category</h2>
            <p className="category-text ml-3">What are you currently looking for?</p>
            <div className="category-item">
              
            <div className=""> 
                      <div className="card-body m-2 flex-colum">
                      <a href="/category/{category[0].id}" >
                      <img className="category img-fluid" src={hiclipart1} alt="Bootstrap" />
                      <p className="font-category"></p>
                      </a>
                      </div>
                  </div>

                  <div className=""> 
                      <div className="card-body m-2 flex-colum">
                      <a href="/category/{category[0].id}" >
                      <img className="category img-fluid" src={hiclipart2} alt="Bootstrap" />
                      <p className="font-category"></p>
                      </a>
                      </div>
                  </div>

                  <div className=""> 
                      <div className="card-body m-2 flex-colum">
                      <a href="/category/{category[0].id}" >
                      <img className="category img-fluid" src={hiclipart3} alt="Bootstrap" />
                      <p className="font-category"></p>
                      </a>
                      </div>
                  </div>

                  <div className=""> 
                      <div className="card-body m-2 flex-colum">
                      <a href="/category/{category[0].id}" >
                      <img className="category img-fluid" src={hiclipart4} alt="Bootstrap" />
                      <p className="font-category"></p>
                      </a>
                      </div>
                  </div>

                  <div className=""> 
                      <div className="card-body m-2 flex-colum">
                      <a href="/category/{category[0].id}" >
                      <img className="category img-fluid" src={hiclipart5} alt="Bootstrap" />
                      <p className="font-category"></p>
                      </a>
                      </div>
                  </div>

              {/* <div className="col categories">
                <div className="card card-5 text-center d-flex flex-colum">
                  <div className="card-body m-2">
                    <img src={hiclipart5} alt="Bootstrap" className="img-fluid" />
                    <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                      <p className="font-category"></p>
                    </div>
                  </div>
                </div> */}
            </div>
            </div>
            
        </div>
    );
}

export default Category;