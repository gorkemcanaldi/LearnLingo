import React from "react";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.home}>
        <div className={style.home_left_div}>
          <h2 className={style.home_title}>
            Unlock your potential with the best
            <span className={style.home_title_span}>language</span> tutors
          </h2>
          <p className={style.home_desc}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button
            onClick={() => navigate("/teachers")}
            className={style.home_buton}
          >
            Get Started
          </button>
        </div>
        <div>
          <img src="/home.png" alt="home_girl" width={568} height={530} />
        </div>
        <div className={style.home_footer}>
          <div className={style.home_footer_div}>
            <h3 className={style.home_foot_h3}>32,000 +</h3>
            <span className={style.home_span}>Experienced tutors</span>
          </div>
          <div className={style.home_footer_div}>
            <h3 className={style.home_foot_h3}>300,000 +</h3>
            <span className={style.home_span}>5-star tutor reviews</span>
          </div>
          <div className={style.home_footer_div}>
            <h3 className={style.home_foot_h3}>120 +</h3>
            <span className={style.home_span}>Subjects taught</span>
          </div>
          <div className={style.home_footer_div}>
            <h3 className={style.home_foot_h3}>200 +</h3>
            <span className={style.home_span}>Tutor nationalities</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
