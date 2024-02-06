import React from 'react'
import css from 'src/css/loader.module.css'
const Loader = () => {
  return (
    <div className={css.container}>
    <div className={css.dotspinner}>
      <div className={css.dotspinnerdot}></div>
      <div className={css.dotspinnerdot}></div>
      <div className={css.dotspinnerdot}></div>
      <div className={css.dotspinnerdot}></div>
      <div className={css.dotspinnerdot}></div>
      <div className={css.dotspinnerdot}></div>
      <div className={css.dotspinnerdot}></div>
      <div className={css.dotspinnerdot}></div>
    </div>
    </div>
  )
}

export default Loader
