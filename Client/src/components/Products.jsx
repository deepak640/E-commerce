import { Items } from 'src/components/Items';
import React from 'react'
import { useParams } from 'react-router-dom';
import css from 'src/css/product.module.css'
import Lsitems from './Lsitems';
const Products = () => {
  const Products = Array.from({ length: 30 }, (_, index) => ({
    // cardimage: `https://images.unsplash.com/photo-1614598632980-35ee54daa5b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlsZXxlbnwwfHwwfHx8MA%3D%3D`,
    category: 'Premium',
    heading: `Brix box Tiles ~Radeon ${index + 1}`,
    price: '200',
  }));
  const { name } = useParams()
  return (
    <>
      <div className={css.engine}>
        <div className={css.group}>
          <svg viewBox="0 0 24 24" aria-hidden="true" className={css.icon}>
            <g>
              <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
              ></path>
            </g>
          </svg>
          <input className={css.input} type="search" placeholder="Search" />
        </div>
      </div>
      {
        name ? <Lsitems /> : <Items products={Products} />
      }
    </>
  )
}

export default Products
