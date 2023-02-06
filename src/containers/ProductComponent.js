import { NavLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("inside components:", products);

  const rederList = products.map((product) => {
    const { id, title, image, category, price } = product;
    return (
      <div className="four column wide" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
              <div className="content">
                <div className="header">
                  <NavLink to={`/detail/${id}`}>
                    {" "}
                    {id} - {title}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{rederList}</>;

  //   console.log(product);

  //   const { id, title } = product[0];
};

export default ProductComponent;
