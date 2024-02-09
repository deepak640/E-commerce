import { Rate } from "antd";
import React, { useState } from "react";
import css from "src/css/cart.module.css";
const Cart = () => {
  const [rate, setRate] = useState();
  const handleRatingChange = (value) => {
    setRate(value);
  };
  return (
    <>
      <div className={css.gridcontainer}>
        <div className={css.product}>
          <div className={css.productimage}>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tiles zack"
            />
          </div>
          <div className={css.productdetails}>
            <h3>Tile zack</h3>
            <h2>$99</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit
              modi, blanditiis reiciendis eligendi hic placeat ea, maxime harum
              laboriosam, neque doloribus sint? Expedita quis necessitatibus
              quas dolore, porro at.
            </p>
            <label className={css.Qty} htmlFor="select">
              Qty:
            </label>
            <select id="select" className={css.select}>
              <option className={css.option}>1</option>
              <option className={css.option}>2</option>
              <option className={css.option}>3</option>
            </select>
            { rate ? <Rate/> : <Rate allowHalf onChange={handleRatingChange} />}
            <div className={css.buttons}>
              <button className={`${css.addtocart} ${css.btn}`}>
                Add to Cart
              </button>
              <button className={`${css.buynow} ${css.btn}`}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
