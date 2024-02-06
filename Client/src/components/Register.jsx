import { VForm } from "src/utils/VForm";
import { CForm } from "src/utils/CForm";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import css from "src/css/register.module.css";
const Register = () => {
  const [mode, setMode] = useState("customer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    confirm: "",
    type: mode,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handlePhoneInputChange = (value, country, event, formattedValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      number: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleComponent = (e) => {
    if (e.target.value === "customer") {
      setMode("customer");
    } else setMode("vendor");
  };
  return (
    <>
      <div className={css.contact_container}>
        <div className={css.buttons}>
          <button
            className={css.btn}
            value="customer"
            onClick={handleComponent}
          >
            Customer
          </button>
          <button className={css.btn} value="vendor" onClick={handleComponent}>
            Vendor
          </button>
        </div>
        <form className={css.contact_box} onSubmit={handleSubmit}>
          <div className={css.left}></div>
          {mode === "vendor" ? (
            <VForm
              formdata={formData}
              handleInputChange={handleInputChange}
              handlePhoneInputChange={handlePhoneInputChange}
            />
          ) : (
            <CForm
              formdata={formData}
              handleInputChange={handleInputChange}
              handlePhoneInputChange={handlePhoneInputChange}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default Register;
