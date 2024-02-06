import React from 'react'
import css from 'src/css/Lsitems.module.css'
const Lsitems = () => {
  const List = Array.from({ length: 8 }, (_, index) => ({
    "image": "https://images.unsplash.com/photo-1614598632980-35ee54daa5b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlsZXxlbnwwfHwwfHx8MA%3D%3D",
    "title": "Tile 1",
    "category": "Premium",
    "description": "Elevate your construction project with our premium range of tiles designed to enhance both aesthetics and functionality. Our construction tiles are crafted with precision and attention to detail, offering a perfect blend of durability and style.",
    "availability": "Out of stock",
    "price": "$200",
    "deliveryInfo": "Free delivery by Monday and fastest delivery"
  }))

  return (
    <div className={css.container}>
      {
        List.map((t, i) => {
          return (
            <div className={css.card} key={i}>
              <img className={css.img} src={t.image} alt="no image" />
              <p className={css.content}>
                <h2>{t.title}</h2>
                <p>{t.category}</p>
                <strong>{t.description}</strong>
                <p>{t.availability}</p>
                <p>{t.price}</p>
                <p>{t.deliveryInfo}</p>
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Lsitems
