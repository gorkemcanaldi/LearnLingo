import { useEffect, useState } from "react";
import style from "./TeachersCard.module.css";
import CardHeader from "./CardHeader";
import CardStats from "./CardStats";
import CardInfo from "./CardInfo";
import CardActions from "./CardActions";
import ReviewsList from "./ReviewsList";
import LevelsList from "./LevelsList";
import TrialLessonModal from "../TrialLessonModal/TrialLessonModal";
import { listenToAuthChanges } from "../../firebase/auth";
import { toast } from "react-toastify";
import { addFavorite, removeFavorite } from "../../redux/teachersSlice";
import { useDispatch, useSelector } from "react-redux";

function TeachersCard({ teacher }) {
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const favorites = useSelector((e) => e.teachers.favorites);

  const isFavorite = favorites.includes(teacher.id);

  const handleFavoriteClick = () => {
    if (!user) {
      toast.info("Please login to add favorites ♥");
      return;
    }

    if (isFavorite) {
      dispatch(removeFavorite(teacher.id));
      toast.info("Removed from favorites");
    } else {
      dispatch(addFavorite(teacher.id));
      toast.success("Added to favorites");
    }
  };

  useEffect(() => {
    const unscruble = listenToAuthChanges((u) => {
      setUser(u);
    });
    return () => unscruble();
  }, []);

  const handleBookLesson = () => {
    if (!user) {
      toast.info("Please login to book a trial lesson");

      return;
    }
    setShowModal(true);
  };

  return (
    <div className={style.card}>
      <CardHeader teacher={teacher} />
      <div>
        <CardStats
          teacher={teacher}
          onFavoriteClick={handleFavoriteClick}
          isFavorite={isFavorite}
        />

        <div className={style.feature}>
          <CardInfo teacher={teacher} />

          <CardActions showMore={showMore} setShowMore={setShowMore} />

          {showMore && <ReviewsList reviews={teacher.reviews} />}

          <LevelsList levels={teacher.levels} />

          {showMore && (
            <button className={style.book_trial} onClick={handleBookLesson}>
              Book trial lesson
            </button>
          )}
          {showModal && (
            <TrialLessonModal
              teacher={teacher}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TeachersCard;
