import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import { getCookie } from "../../../helpers/cookie";
import { useSelector } from "react-redux";

export default function Header() {
  const token = getCookie("token");
  // eslint-disable-next-line no-unused-vars
  const isLogin = useSelector((state) => state.loginReducer);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <div className="header__logo">
              <Link to={"/"}>Quiz</Link>
            </div>
            {token && (
              <div className="header__menu">
                <ul>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/topic"}>Topic</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/answers"}>Answers</NavLink>
                  </li>
                </ul>
              </div>
            )}
            {token ? (
              <div className="header__account">
                <ul>
                  <li>
                    <Link to={"/logout"}>Logout</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="header__account">
                <ul>
                  <li>
                    <NavLink to={"/login"}>Login</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/register"}>Register</NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
