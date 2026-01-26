import React from "react";
import style from "./TeachersCard.module.css";

function CardActions({ showMore, setShowMore }) {
  return (
    <div>
      {!showMore && (
        <button className={style.readMoreBtn} onClick={() => setShowMore(true)}>
          Read more
        </button>
      )}
    </div>
  );
}

export default CardActions;
