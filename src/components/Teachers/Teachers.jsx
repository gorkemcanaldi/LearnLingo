import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachersDB } from "../../services/teachersService";
import { setAllTeachers } from "../../redux/teachersSlice";
import Filters from "../Filters/Filters";
import TeachersCard from "../TeachersCard/TeachersCard";
import style from "./Teachers.module.css";

function Teachers() {
  const dispatch = useDispatch();

  const { visibleCount, allTeachers, filters } = useSelector((s) => s.teachers);

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const teachers = await fetchTeachersDB();

        dispatch(setAllTeachers(teachers));
      } catch (error) {
        console.log("Teachers yüklenemdi:", error);
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
      {visibleTeachers.length === 0 ? (
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
    </>
  );
}

export default Teachers;
