import React from 'react'
import { Link } from 'react-router-dom'
import css from 'src/css/header.module.css'
const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <div className={css.logo}>
          <a href="index.html">Humayun.<span>K</span></a>
        </div>
        <input type="checkbox" id={css.menu_toggle} />
        <label htmlFor={css.menu_toggle} className={css.menu_icon}>&#9776;</label>
        <ul className={css.menu}>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/'}>Contact</Link></li>
          <li><Link to={'/'}>About</Link></li>
          <li><Link to={'/login'}>Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
