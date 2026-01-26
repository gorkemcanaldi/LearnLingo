import style from "./TeachersCard.module.css";

function CardInfo({ teacher }) {
  return (
    <>
      <p className={style.teacher_head}>
        Speaks:{" "}
        <span className={style.teacher_head_span}>
          {teacher.languages.join(", ")}
        </span>
      </p>

      <p className={style.teacher_head}>
        Lesson Info:{" "}
        <span className={style.teacher_head_span_}>{teacher.lesson_info}</span>
      </p>

      <p className={style.teacher_head}>
        Conditions:{" "}
        <span className={style.teacher_head_span_}>{teacher.conditions}</span>
      </p>
    </>
  );
}

export default CardInfo;
