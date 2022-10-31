import React from "react";
import "./StyleDetail.css";
import line48 from "../../../../assets/image/detail products/Line 48.png";
import star from "../../../../asset/img/star.png";

const InformationProduct = () => {
    return (
        <div>
            <div className="container mb-5">
                  <div className="row mt-3">
                      </div>
                      <div className="row mt-3">
                      <h3 className="title-info">Product review</h3>
                      <div className="col-lg-2">
                          <h4 className="mt-4 text-rating">5.0 <small className="text-finis">/10</small></h4>
                          <div className="d-flex justify-content-start text-warning start mt-3">
                              <div className="bi-star-fill"><img src={star}></img></div>
                              <div className="bi-star-fill ms-2"><img src={star}></img></div>
                              <div className="bi-star-fill ms-2"><img src={star}></img></div>
                              <div className="bi-star-fill ms-2"><img src={star}></img></div>
                              <div className="bi-star-fill ms-2"><img src={star}></img></div>
                          </div>
                      </div>
                      
                      <div className="col-lg-4 mt-4 ">
                          <div className="d-flex justify-content-start start">
                              <div className="bi-star-fill text-warning">
                              <img src={star}></img>
                              </div>
                              <p className="ms-1">5</p>
                              <img className="ms-1 border-rating" src={line48} alt=""/>
                              <p>4</p>
                          </div>
                          <div className="d-flex justify-content-start start ">
                              <div className="bi-star-fill text-warning">
                              <img src={star}></img>
                              </div>
                              <p className="ms-1">4</p>
                          <div className="ms-1 border-null"></div>
                              <p>0</p>
                          </div>
                          <div className="d-flex justify-content-start start ">
                              <div className="bi-star-fill text-warning">
                              <img src={star}></img>
                              </div>
                              <p className="ms-1">3</p>
                              <div className="ms-1 border-null"></div>
                              <p>0</p>
                          </div>
                          <div className="d-flex justify-content-start start">
                              <div className="bi-star-fill text-warning">
                              <img src={star}></img>
                              </div>
                              <p className="ms-1">2</p>
                          <div className="ms-1 border-null"></div>
                              <p>0</p>
                          </div>
                          <div className="d-flex justify-content-start start">
                              <div className="bi-star-fill text-warning">
                                <img src={star}></img>
                              </div>
                              <p className="ms-1">1</p>
                          <div className="ms-1 border-null"></div>
                              <p>0</p>
                          </div>
                      </div>
                    </div>
                <hr></hr>
            </div>
      </div>
    )
  }
  
  export default InformationProduct

