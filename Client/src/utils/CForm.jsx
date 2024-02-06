import React from "react";
import css from "src/css/register.module.css";
import PhoneInput from "react-phone-number-input";

export function CForm({ formdata, handleInputChange, handlePhoneInputChange }) {
    console.log("Crender");

  return (
    <div className={css.right}>
      <h2>Register</h2>
      <input
        type="text"
        name="name"
        className={css.field}
        id=""
        onChange={handleInputChange}
        value={formdata.name}
        placeholder="Enter Name"
        required
        autoComplete="off"
      />
      <input
        type="Email"
        name="email"
        className={css.field}
        id=""
        onChange={handleInputChange}
        value={formdata.email}
        placeholder="Enter Email"
        required
        autoComplete="off"
      />
      <PhoneInput
        className={css.field}
        placeholder="Enter phone number"
        defaultCountry="IN"
        name="number"
        onChange={handlePhoneInputChange}
        value={formdata.number}
        required
        autoComplete="off"
      />
      <input
        type="text"
        name="password"
        className={css.field}
        id=""
        onChange={handleInputChange}
        value={formdata.password}
        placeholder="Enter Password"
        required
        autoComplete="off"
      />
      <input
        type="text"
        name="confirm"
        className={css.field}
        id=""
        onChange={handleInputChange}
        value={formdata.Confirm}
        placeholder="confirm password"
        required
        autoComplete="off"
      />
      <button className={css.btn}>SUBMIT</button>
    </div>
  );
}
