import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachersDB } from "../../services/teachersService";
import {
  loadMore,
  setAllTeachers,
  setLoading,
} from "../../redux/teachersSlice";
import Filters from "../Filters/Filters";
import TeachersCard from "../TeachersCard/TeachersCard";
import style from "./Teachers.module.css";
import ClipLoader from "react-spinners/ClipLoader";

function Teachers() {
  const dispatch = useDispatch();

  const { visibleCount, allTeachers, filters, loading } = useSelector(
    (s) => s.teachers,
  );

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        dispatch(setLoading(true));
        const teachers = await fetchTeachersDB();
        dispatch(setAllTeachers(teachers));
      } catch (error) {
        console.log("Teachers yüklenemdi:", error);
        dispatch(setLoading(false));
      }
    };
    loadTeachers();
  }, [dispatch]);

  const allLanguages = [...new Set(allTeachers.flatMap((t) => t.languages))];
  const allLevels = [...new Set(allTeachers.flatMap((t) => t.levels))];
  const priceOptions = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
  const filteredTeachers = allTeachers.filter((teacher) => {
    const matchLanguage =
      !filters.languages || teacher.languages.includes(filters.languages);

    const matchLevel =
      !filters.levels || teacher.levels.includes(filters.levels);

    const matchPrice =
      filters.price === null || teacher.price_per_hour === filters.price;

    return matchLanguage && matchLevel && matchPrice;
  });

  const visibleTeachers = filteredTeachers.slice(0, visibleCount);
  console.log(visibleTeachers);
  return (
    <>
      <div>
        <Filters
          languages={allLanguages}
          levels={allLevels}
          price={priceOptions}
        />
      </div>
      {loading ? (
        <div className={style.spinner_container}>
          <ClipLoader color="#F4C550" size={60} />
        </div>
      ) : visibleTeachers.length === 0 ? (
        <div className={style.no_teachers}>
          <img src="/teacher_not.png" alt="teacher" />
          <h2>There are no teachers that match this filter.</h2>
          <p>Try adjusting your filters to see more results.</p>
        </div>
      ) : (
        <>
          {visibleTeachers.map((t) => (
            <TeachersCard key={t.id} teacher={t} />
          ))}
        </>
      )}
      {visibleCount < filteredTeachers.length && !loading && (
        <div className={style.load_div}>
          <button
            onClick={() => dispatch(loadMore())}
            className={style.load_more}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default Teachers;
