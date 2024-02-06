import React from "react";
import css from 'src/css/footer.module.css'
const Footer = () => {


  return (
    <div className={css.footerbasic}>
    <section className={css.footer_sec}>
      <h1>Subscribe to our Newsletter</h1>
      <span>Get latest updates and offers.</span>
      <div>
      <input type="text" placeholder="Enter your email" className={css.field}/>
      <button className={css.button}>Subscribe</button>
      </div>
    </section>
      <footer>
        <div className="social"><a href="/"><i className={css.icon}></i></a><a href="/"><i className={css.icon}></i></a>
          <a href="/"><i className={css.icon}></i></a>
          <a href="/"><i className={css.icon}></i></a>
        </div>
        <ul className={css.listinline}>
          <li className={css.item}><a href="/">Home</a></li>
          <li className={css.item}><a href="/">Services</a></li>
          <li className={css.item}><a href="/">About</a></li>
          <li className={css.item}><a href="/">Terms</a></li>
          <li className={css.item}><a href="/">Privacy Policy</a></li>
        </ul>
        <p className={css.copyright}>NEGI © 2024</p>
      </footer>
    </div>
  )
}



export default Footer
