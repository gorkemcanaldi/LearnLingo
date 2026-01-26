import style from "./TeachersCard.module.css";

function CardHeader({ teacher }) {
  return (
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
  );
}

export default CardHeader;
