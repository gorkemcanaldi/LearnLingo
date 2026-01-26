import React from "react";
import style from "./NoPage.module.css";

function NoPage() {
  return (
    <div className={style.no_page}>
      <h1>404</h1>
      <p>Oops! Page not found.</p>
    </div>
  );
}

export default NoPage;
