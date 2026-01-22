import React, { useEffect, useState } from "react";
import style from "./Headers.module.css";
import { NavLink } from "react-router-dom";
import AuthModal from "../modals/AuthModal";
import { listenToAuthChanges, logoutUser } from "../../firebase/auth";

function Headers() {
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  useEffect(() => {
    const unsubscribe = listenToAuthChanges((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className={style.headers}>
        <NavLink className={style.headers_logo} to={"/"}>
          <img
            src="/learn_lingo_logo.svg"
            alt="learn-lingo-logo"
            height={28}
            width={28}
          />
          <p className={style.logo_p}>LearnLingo</p>
        </NavLink>
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
          {user && (
            <NavLink
              className={({ isActive }) =>
                isActive ? `${style.link} ${style.link_active}` : style.link
              }
              to={"/favorites"}
            >
              Favorites
            </NavLink>
          )}
        </div>

        <div className={style.headers_div}>
          <img
            className={style.log_icon}
            src="/log-in-out.svg"
            alt="log-in-out-icon"
          />
          {isAuthOpen && (
            <AuthModal mode={authMode} onClose={() => setIsAuthOpen(false)} />
          )}
          {!user && (
            <>
              <button
                className={style.login_button}
                onClick={() => {
                  setAuthMode("login");
                  setIsAuthOpen(true);
                }}
              >
                Login
              </button>

              <button
                className={style.register_button}
                onClick={() => {
                  setAuthMode("register");
                  setIsAuthOpen(true);
                }}
              >
                Registration
              </button>
            </>
          )}

          {user && (
            <>
              <button onClick={logoutUser}>Log out</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Headers;
