import React from "react";

const Card = ({ data }) => {
  return (
    <div className="product-card-out">
      <div className="product-card">
        <div class="badge">{data.discountPercentage + " %   off"}</div>
        <div className="product-tumb">
          <img src={data?.thumbnail} alt="prod" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{data?.category}</span>
          <h4>
            <span className="a">{data?.title}</span>
          </h4>
          <p>{data?.description}</p>
          <div className="product-bottom-details">
            <div className="d-flex w-100">
              <div className="product-price">${data?.price}</div>
              <div style={{ color: "red", textAlign: "right" }}>
                only <b> {data.stock}</b> left
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
