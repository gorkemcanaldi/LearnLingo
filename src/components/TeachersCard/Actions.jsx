import style from "./TeachersCard.module.css";

function CardActions({ showMore, setShowMore }) {
  if (showMore) return null;

  return (
    <button className={style.readMoreBtn} onClick={() => setShowMore(true)}>
      Read more
    </button>
  );
}

export default CardActions;
