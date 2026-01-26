import style from "./TeachersCard.module.css";

function CardStats({ teacher, onFavoriteClick, isFavorite }) {
  return (
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
            height={16}
            width={16}
            alt="book"
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
            height={16}
            width={16}
            alt="star"
          />
          Rating: <span>{teacher.rating}</span>
        </p>

        <p>
          Price / 1 hour:{" "}
          <span className={style.card_price}>{teacher.price_per_hour}$</span>
        </p>

        <img
          onClick={onFavoriteClick}
          className={style.heart}
          src={isFavorite ? "/heart_yellow.svg" : "/heart.svg"}
          alt="heart"
          width={26}
          height={26}
        />
      </div>
    </div>
  );
}

export default CardStats;
