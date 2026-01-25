import React from "react";
import style from "./TeachersCard.module.css";

function TeachersCard({ teacher }) {
  return (
    <>
      <div className={style.card}>
        <div className={style.img_div}>
          <img
            className={style.card_img}
            src={teacher.avatar_url}
            width="96"
            height="96"
            alt="avatar"
          />
          <div className={style.img_green}></div>
        </div>
        <div>
          <div className={style.card_div}>
            <div className={style.card_name}>
              <span className={style.name_span}>Languages</span>
              <h3 className={style.card_h3}>
                {teacher.name} {teacher.surname}
              </h3>
            </div>
            <div className={style.card_stat}>
              <span className={style.book_span}>
                <img
                  className={style.icon}
                  src="/book.svg"
                  alt="book"
                  height={16}
                  width={16}
                />
                Lessons online
              </span>
              <p>
                Lessons done: <span>{teacher.lessons_done}</span>
              </p>
              <p className={style.book_span}>
                <img
                  className={style.icon}
                  src="/star.svg"
                  alt="star"
                  height={16}
                  width={16}
                />
                Rating: <span>{teacher.rating}</span>
              </p>
              <p>
                Price / 1 hour:{" "}
                <span className={style.card_price}>
                  {teacher.price_per_hour}$
                </span>
              </p>
              <img
                className={style.heart}
                src="/heart.svg"
                alt="heart"
                width={26}
                height={26}
              />
            </div>
          </div>
          <div className={style.feature}>
            <p className={style.teacher_head}>
              Speaks:{" "}
              <span className={style.teacher_head_span}>
                {teacher.languages.join(", ")}
              </span>
            </p>
            <p className={style.teacher_head}>
              Lesson Info:{" "}
              <span className={style.teacher_head_span_}>
                {teacher.lesson_info}
              </span>
            </p>
            <p className={style.teacher_head}>
              Conditions:{" "}
              <span className={style.teacher_head_span_}>
                {teacher.conditions}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeachersCard;
