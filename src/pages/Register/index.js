import React from "react";
import { checkEmail, register } from "../../services/UsersServices";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let fullName = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;

    const options = {
      fullName: fullName,
      email: email,
      password: password,
      token: generateToken(),
    };
    const checkEmailExits = await checkEmail("email", email);

    if (checkEmailExits.length === 0) {
      // eslint-disable-next-line no-unused-vars
      const response = await register(options);
      // console.log(response);
      if (response) {
        navigate("/login");
      } else {
        alert("Dang Ky That Bai");
      }
    } else {
      alert("Email da ton tai");
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h3 className="inner-title">Register Account</h3>
          <input type="text" name="fullname" placeholder="Fullname" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="button button-main">Register</button>
        </form>
      </div>
    </>
  );
}
