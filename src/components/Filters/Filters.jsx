import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLanguageFilter,
  setLevelFilter,
  setPriceFilter,
} from "../../redux/teachersSlice";

function Filters({ languages, levels, price }) {
  const { filters } = useSelector((s) => s.teachers);
  const dispatch = useDispatch();

  return (
    <div>
      <select
        value={filters.languages}
        onChange={(e) => dispatch(setLanguageFilter(e.target.value))}
      >
        <option value="">Language</option>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <select
        value={filters.levels}
        onChange={(a) => dispatch(setLevelFilter(a.target.value))}
      >
        <option value="">Level</option>
        {levels.map((lvl) => (
          <option key={lvl} value={lvl}>
            {lvl}
          </option>
        ))}
      </select>
      <select
        value={filters.price}
        onChange={(e) => dispatch(setPriceFilter(e.target.value))}
      >
        <option value="">Price $</option>
        {price.map((price) => (
          <option key={price} value={price}>
            {price} $
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
