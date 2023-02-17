import React, { useEffect } from "react";
import { fetchProducts, setProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  //   to select the static data from  the reducer
  // you always dispatch an action
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
