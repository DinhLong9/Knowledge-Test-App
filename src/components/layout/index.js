import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./style.scss";

export default function Layout() {
  return (
    <>
      <div className="layout">
        <Header />
        <main className="main">
          <div className="container">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
