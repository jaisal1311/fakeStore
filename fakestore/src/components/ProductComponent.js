import React from "react";
import { useSelector } from "react-redux";

function ProductComponent() {
  const product = useSelector((state) => state.allProducts);
  const { id, name } = product[0];
  return (
    <div className="four wide column" key={id}>
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
