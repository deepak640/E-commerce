import React from "react";
import css from 'src/css/product.module.css'

export function Items({ products }) {
  return <div className={css.container}>
    {products.map((p, i) => {
      return <div className={css.card} key={i}>
        <div className={css.cardimage}></div>
        <div className={css.category}>{p.category}</div>
        <div className={css.heading}>{p.heading}
          <p className={css.price}>${p.price}</p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
      </div>;
    })}
  </div>;
}
