import React, { useEffect } from "react";
import {
  fetchProduct,
  removeSelectProduct,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const ProductDetail = () => {
  // to access the selected product, we should make selector
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id && id !== "") {
      dispatch(fetchProduct(id));
    }
    return () => {
      dispatch(removeSelectProduct());
    };
  }, [id]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>... Loading</div>
      ) : (
        <div className="ui  placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="column lp">
              <img className="ui fluid image" src={image} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal  tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to cart</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
