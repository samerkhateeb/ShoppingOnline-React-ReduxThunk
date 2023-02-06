import React, { useEffect } from "react";
import { fetchProducts, setProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  //   to select the static data from  the reducer

  // const products = useSelector((state) => state);

  //   console.log(products);
  // you always dispatch an action
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Error:->", err);
  //     });

  //   console.log("inside the API", response.data);
  //   // here it will return the object from the action, the object in action will be taken from  the reducer
  //   // this  will set the products value, and the time we
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
    // fetchProducts();
  }, []);

  //   console.log("products", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
