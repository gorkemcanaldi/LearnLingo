import style from "./TeachersCard.module.css";

function ReviewsList({ reviews }) {
  return (
    <div className={style.moreContent}>
      {reviews.map((rev, i) => (
        <div key={i}>
          <div className={style.reviewItem}>
            <div className={style.reviewAvatar}>
              {rev.reviewer_name?.charAt(0).toUpperCase()}
            </div>

            <div className={style.reviewHeader}>
              <p className={style.reviewName}>{rev.reviewer_name}</p>

              <span className={style.reviewRating}>
                <img src="/star.svg" width={16} height={16} alt="star" />
                {rev.reviewer_rating}.0
              </span>
            </div>
          </div>

          <p className={style.reviewText}>{rev.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewsList;
