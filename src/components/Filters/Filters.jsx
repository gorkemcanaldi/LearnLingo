import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLanguageFilter,
  setLevelFilter,
  setPriceFilter,
} from "../../redux/teachersSlice";
import style from "./Filters.module.css";

function Filters({ languages, levels, price }) {
  const { filters } = useSelector((s) => s.teachers);
  const dispatch = useDispatch();

  return (
    <>
      <div className={style.filters}>
        <div className={style.filter_div}>
          <span className={style.filter_span}>Languages</span>

          <select
            className={style.filters_select}
            value={filters.languages}
            onChange={(e) => dispatch(setLanguageFilter(e.target.value))}
          >
            <option className={style.filters_opt} value="">
              Language
            </option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <div className={style.filter_div}>
          <span className={style.filter_span}>Level of knowledge</span>
          <select
            className={style.filters_select}
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
        </div>
        <div className={style.filter_div}>
          <span className={style.filter_span}>Price</span>
          <select
            className={style.filters_select}
            value={filters.price ?? ""}
            onChange={(e) => dispatch(setPriceFilter(e.target.value))}
          >
            <option value="">Price $</option>
            {price.map((prc) => (
              <option key={prc} value={prc}>
                {prc} $
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Filters;
