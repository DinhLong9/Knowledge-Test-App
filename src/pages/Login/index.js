import React from "react";
import { login } from "../../services/UsersServices";
import { setCookie } from "../../helpers/cookie";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../actions/loginAction";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    const response = await login(email, password);

    if (response.length > 0) {
      // console.log(response);
      navigate("/");
      setCookie("id", response[0].id, 1);
      setCookie("email", response[0].email, 1);
      setCookie("fullName", response[0].fullName, 1);
      setCookie("password", response[0].password, 1);
      setCookie("token", generateToken(), 1);
      dispatch(checkLogin(true));
    } else {
      alert("Sai Tai Khoan Hoac Mat Khau");
    }
  };
  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h3 className="inner-title">Login Quiz</h3>
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="button button-main">Login</button>
        </form>
      </div>
    </>
  );
}
