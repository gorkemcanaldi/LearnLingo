import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachersDB } from "../../services/teachersService";
import { setAllTeachers } from "../../redux/teachersSlice";
import Filters from "../Filters/Filters";

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
  const priceOptions = [10, 20, 30, 40, 50];

  const filteredTeachers = allTeachers.filter((teacher) => {
    const matchLanguage =
      !filters.languages || teacher.languages.includes(filters.languages);

    const matchLevel =
      !filters.levels || teacher.levels.includes(filters.levels);

    const matchPrice =
      filters.price === null || teacher.price_per_hour <= filters.price;

    return matchLanguage && matchLevel && matchPrice;
  });

  const visibleTeachers = filteredTeachers.slice(0, visibleCount);

  return (
    <div>
      <Filters
        languages={allLanguages}
        levels={allLevels}
        price={priceOptions}
      />
      {visibleTeachers.map((t) => (
        <div key={t.id}>
          <h3>
            {t.name} {t.surname}
          </h3>
          <p>Languages: {t.languages.join(", ")}</p>
          <p>Levels: {t.levels.join(", ")}</p>
          <p>Price: ${t.price_per_hour}</p>
        </div>
      ))}
    </div>
  );
}

export default Teachers;
