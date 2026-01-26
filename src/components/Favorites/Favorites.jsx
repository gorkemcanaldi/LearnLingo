import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachersDB } from "../../services/teachersService";
import { setAllTeachers, setLoading } from "../../redux/teachersSlice";
import TeachersCard from "../TeachersCard/TeachersCard";
import ClipLoader from "react-spinners/ClipLoader";
import style from "./Favorites.module.css";

function Favorites() {
  const dispatch = useDispatch();

  const allTeachers = useSelector((state) => state.teachers.allTeachers);
  const favorites = useSelector((state) => state.teachers.favorites);
  const loading = useSelector((state) => state.teachers.loading);

  useEffect(() => {
    if (allTeachers.length === 0) {
      const loadTeachers = async () => {
        try {
          dispatch(setLoading(true));
          const teachers = await fetchTeachersDB();
          dispatch(setAllTeachers(teachers));
        } catch (error) {
          console.log("Teachers yüklenemedi:", error);
          dispatch(setLoading(false));
        }
      };
      loadTeachers();
    }
  }, [allTeachers.length, dispatch]);

  const favTeachers = allTeachers.filter((teacher) =>
    favorites.includes(teacher.id),
  );

  if (loading) {
    return (
      <div className={style.spinner_container}>
        <ClipLoader color="#F4C550" size={60} />
      </div>
    );
  }

  if (favTeachers.length === 0) {
    return <p>You have no favorite teachers yet.</p>;
  }

  return (
    <div>
      {favTeachers.map((teacher) => (
        <TeachersCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
}

export default Favorites;
