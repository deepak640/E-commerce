import React, { useState } from "react";
import css from "src/css/login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={css.contact_container}>
        <form className={css.contact_box} onSubmit={handleSubmit}>
          <div className={css.left}></div>
          <div className={css.right}>
            <h2>Login</h2>
            <input
              type="text"
              name="username"
              className={css.field}
              id=""
              onChange={handleInputChange}
              placeholder="Enter Username"
              required
              autoComplete="off"
            />
            <input
              type="text"
              name="password"
              className={css.field}
              id=""
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
              autoComplete="off"
            />
            <Link className={css.forgot}>Forgot Password ?</Link>
            <button className={css.btn}>SUBMIT</button>
            <hr className={css.style_two} />
            <Link to={"/register"}>Create new account</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
