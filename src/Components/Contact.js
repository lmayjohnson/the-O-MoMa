import "./Contact.css";
import React from "react";
import { useState } from "react";
const Contact = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="HeaderStyle1">Feedback or Questions?</h2>
      <h3 className="HeaderStyle2"> Contact Us!</h3>
      <p>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label className="MessageField">
          Message:
          <input
            type="text"
            name="message"
            value={inputs.message || ""}
            onChange={handleChange}
          />
        </label>
      </p>
      <input type="submit" />
    </form>
  );
};
export default Contact;
