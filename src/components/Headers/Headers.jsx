import React from "react";
import style from "./Headers.module.css";
import { NavLink } from "react-router-dom";

function Headers() {
  return (
    <>
      <div className={style.headers}>
        <div className={style.headers_logo}>
          <img
            src="/learn_lingo_logo.svg"
            alt="learn-lingo-logo"
            height={28}
            width={28}
          />
          <p className={style.logo_p}>LearnLingo</p>
        </div>
        <div className={style.headers_rout}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.link_active}` : style.link
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.link_active}` : style.link
            }
            to={"/teachers"}
          >
            Teachers
          </NavLink>
        </div>

        <div>
          <img src="/log-in-out.svg" alt="log-in-out-icon" />
        </div>
      </div>
    </>
  );
}

export default Headers;
