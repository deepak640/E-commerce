import React from "react";
import css from "src/css/cart.module.css";
const Cart = () => {
  return (
    <>
      <div className={css.gridcontainer}>
        <div className={css.product}>
          <div className={css.productimage}>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product 1"
            />
          </div>
          <div className={css.productdetails}>
            <h3>Product 1</h3>
            <p>Description of Product 1.</p>
            <div className={css.buttons}>
              <button className={css.addtocart}>Add to Cart</button>
              <button className={css.buynow}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
