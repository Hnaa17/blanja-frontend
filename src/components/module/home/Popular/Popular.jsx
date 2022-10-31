import React, {useEffect} from "react";
import "../StyleHome.css";
import "../../../../pages/style.css"
import axios from "axios";
import Card from "../../../base/Card";
import { useDispatch, useSelector } from "react-redux";
import { FormatRupiah } from "@arismun/format-rupiah";
import { setProducts } from "../../../../configs/redux/actions/productsActions";

function Populer() {
    // const products = useSelector((state) => state.allProducts.products);
    // const dispatch = useDispatch();
 
    // const fetchProducts = async () => {
    //   const response = await axios
    //     .get(`http://localhost:8000/products`)
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   dispatch(setProducts(response.data.data));
    // };
    // useEffect(() => {
    //   fetchProducts();
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
   return (
     <div>
       <div className="container mb-5">
         <div className="row">
           <div className="products">
             <h3>Populer</h3>
             <p>Find clothes that are trending recently</p>
           
           <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
             {/* {products.map((item) => (
               <div className="col" key={item.id}> */}
                 <Card
                  //  src={item.photo}
                  //  to={`/detail/${item.id}`}
                  //  titleName={item.product_name}
                  //  price={<FormatRupiah value={item.price} />}
                  //  store_name={item.store_name}
                 />
               {/* </div> */}
             {/* ))} */}
           </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 export default Populer